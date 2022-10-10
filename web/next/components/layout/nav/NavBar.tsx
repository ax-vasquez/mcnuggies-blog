import Image from "next/image"
import { Navbar } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { toggleShowSidebar } from "../../../redux/sidebarSlice"
import CustomIcon from "../../shared/CustomIcon"

const SiteNavigation = () => {
    const dispatch = useDispatch()

    return (
      <Navbar variant="dark" sticky="top">
        <Navbar.Brand id='sidebar-menu-button' className="menu-icon" onClick={() => dispatch(toggleShowSidebar())}>
          <CustomIcon
                    fileName="bootstrap-list"
                    height={32}
                    width={32}
                />
        </Navbar.Brand>
        <Navbar.Brand className="app-icon" href='/'>
          <Image
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