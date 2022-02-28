import { Container } from "react-bootstrap";
import SingleJob from "./SingleJob";

const SearchPage =({jobs}) => {
    return ( 
        <Container>
            <Row>
                <Col>
                    {jobs && jobs.map(job => <SingleJob key={job._id} job={job}/>)}
                </Col>
            </Row>
        </Container>
     );
}

export default SearchPage;