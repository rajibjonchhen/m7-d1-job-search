import { Col, Container, Row } from "react-bootstrap";

const JobDetail = ({selectedJob}) =>  {
    return ( 
        <Container>
            <Row>
                <Col>
                <p className='h3'>{selectedJob.title}</p>
                <div>
                    
                </div>
                </Col>
            </Row>
        </Container>
     );
}

export default JobDetail;