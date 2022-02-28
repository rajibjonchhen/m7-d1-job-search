import { Col, Container, Row } from "react-bootstrap";

const JobDetail = ({selectedJob}) =>  {
    return ( 
        
        <div>
            <p className='h3'>{selectedJob.title}</p>
            <p className=''>{selectedJob.company_name}</p>
            <p className=''>{selectedJob.category}</p>
            <p className=''>{selectedJob.title}</p>
            
        </div>
                
     );
}

export default JobDetail;