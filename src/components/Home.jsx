import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {BsSearch} from 'react-icons/bs'
import {FaPlaneArrival} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import SingleJob from "./SingleJob";
import './home.css'
import JobDetail from "./JobDetail";
const Home = ({setSelectedJob, selectedJob}) => {

    // const navigate = useNavigate()
    const[search, setSearch] = useState('')
    const [showJobs, setShowJobs] = useState(false)
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
  

    const categories = ["it", "management", "hotel", "service", "communication", "internship", "marketing"]
    return ( 
    <Container>
        <Row>
            <Col>
                <p className="h1">We help you land in <br/> your dream job</p>
                <div className='pRelative'>
                        <input className='w-100' style={{}} type='text' id='search' value={search} onChange={(e) => {setSearchQuery(e.target.value)}}/>
                        <div className='plane-icon'>
                            <FaPlaneArrival/>
                        </div>
                    <span onClick={(e) => {fetchData("search",search)}}>
                    <BsSearch/>
                    </span>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='pointer m-3 d-flex flex-wrap justify-content-between w-100'>{
                categories.map((category, i) => <span key={i} onClick={(e) => {fetchData("category", category)}} className="p-2 m-2 bg-dark text-white">{category}</span>)
            }</div>
           </Col>
        </Row>
        <Row className='d-flex' style={{display:showJobs? 'block':'none'}}>
            <Col>
                {jobs && jobs.map((job,i) =>
                 <SingleJob key={job._id} job={job} setSelectedJob={setSelectedJob}/>
                 )}
            </Col>
            {selectedJob  &&
            <Col>
                     <JobDetail selectedJob={selectedJob}/>
            </Col>
                     }
        </Row>

    </Container> );
}

export default Home;