import { Container, Navbar } from "react-bootstrap"

const SiteNavigation = ({}) => {
    return (
        <Navbar variant="dark" sticky="top">
            <Navbar.Brand href='/'>
                <img
                    alt="mcnuggies-logo"
                    width="32"
                    height="32"
                    src="/mcnuggies.png"
                />
            </Navbar.Brand>
        </Navbar>
    )
}

export default SiteNavigation