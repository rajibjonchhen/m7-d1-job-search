import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavBar() {
    return ( 
        <Navbar bg="dark">
        <Container>
            <Link to={"/"}>
                <Navbar.Brand className='text-white h3'>
                    Dream Jobs
                </Navbar.Brand>
            </Link>
        </Container>
        </Navbar>

     );
}

export default MyNavBar;