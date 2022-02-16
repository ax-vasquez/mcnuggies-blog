import { Container, Navbar } from "react-bootstrap"
import CustomIcon from "../../util/CustomIcon"

const SiteNavigation = ({}) => {
    return (
        <Navbar variant="dark" sticky="top">
            <Navbar.Brand className="menu-icon" href='/'>
                <CustomIcon 
                    fileName="bootstrap-list"
                    height={32}
                    width={32}
                />
            </Navbar.Brand>
            <Navbar.Brand className="app-icon" href='/'>
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