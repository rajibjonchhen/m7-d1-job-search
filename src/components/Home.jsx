import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {BsSearch} from 'react-icons/bs'
import {GiAirplaneArrival} from 'react-icons/gi'
import { useNavigate } from "react-router-dom";
import SingleJob from "./SingleJob";
import './home.css'
import JobDetail from "./JobDetail";
const Home = ({setSelectedJobArray, setSelectedJob, selectedJob}) => {

    // const navigate = useNavigate()
    const[search, setSearch] = useState('')
    const [showJobs, setShowJobs] = useState(false)
    const [showCategory, setShowCategory] = useState(true)
    
    const setSearchQuery = (find) => {
      setSearch(find)
    }
    
  
    const [jobs, setJobs] = useState([])
    const fetchData = async(field, query) => {
      try {
        let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?${field}=${query}&limit=40`)
        if(response.ok){
          let data = await response.json()
          console.log(data.data)
          setJobs(data.data)
          setShowJobs(true)
        }
      } catch (error) {
        
      }
    }
  

    const categories = ["it", "business", "Customer Service", "DevOps / Sysadmin", "Finance / Legal", "data", "marketing", "all others", "Software Development", "Human Resources", "Design", "QA"]
    return ( 
    <Container>
        <Row className="justify-content-center mt-5">
            
                {
                categories.map((category, i) => <Col key={i} xs={4} sm={4} md={3} lg={2} xl={2}  onClick={(e) => {fetchData("category", category)}} className="category">{category}</Col>)
            }
        
        </Row>
        <Row style={{position:'sticky', top:'64px', background:'white', zIndex:1}}>
            <Col sm={12} md={8} lg={6} className='m-auto'>
                <div className='search-section'>
                    <div className=''>

                      
                        <p className="h1">We help you land in <br/> your dream job</p>
                    </div>
                    <div className='pRelative'>

                            <input className='w-100 text-left' type='text' id='search' value={search} onChange={(e) => {setSearchQuery(e.target.value)}}/>
                            <div className='plane-icon'>
                                    <GiAirplaneArrival/>
                            </div>    
                        <span className='search-icon' onClick={(e) => {fetchData("search",search)}}>
                        <BsSearch/>
                        </span>
                    </div>
                </div>
            </Col>
        </Row>
        
        <Row className='d-flex' style={{display:showJobs? 'block':'none'}}>
            <Col>
                {jobs && jobs.map((job,i) =>
                 <SingleJob key={job._id} job={job} setSelectedJob={setSelectedJob} setSelectedJobArray={setSelectedJobArray}/>
                 )}
            </Col>
            {/* {selectedJob  &&
            <Col>
                     <JobDetail selectedJob={selectedJob}/>
            </Col>
                     } */}
        </Row>

    </Container> );
}

export default Home;