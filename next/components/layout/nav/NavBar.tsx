import { Container, Navbar } from "react-bootstrap"

const SiteNavigation = ({}) => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        alt="mcnuggies-logo"
                        width="32"
                        height="32"
                        src="/mcnuggies.png"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default SiteNavigation