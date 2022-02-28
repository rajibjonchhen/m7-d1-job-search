import { Container } from "react-bootstrap";

const JobDetail = ({job}) =>  {
    return ( 
        <Container>
            <Row>
                <Col>
                <p className='h3'>{job.title}</p>
                <div>
                    
                </div>
                </Col>
            </Row>
        </Container>
     );
}

export default JobDetail;