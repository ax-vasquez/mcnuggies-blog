import Image from "next/image"
import { Navbar } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { toggleShowSidebar } from "../../../redux/sidebarSlice"
import CustomIcon from "../../shared/CustomIcon"
import styles from './NavBar.module.scss'

const SiteNavigation = () => {
    const dispatch = useDispatch()

    return (
      <Navbar variant="dark" sticky="top" className={styles.navBar}>
        <Navbar.Brand id='sidebar-menu-button' className={styles.menuIcon} onClick={() => dispatch(toggleShowSidebar())}>
          <CustomIcon
                    fileName="bootstrap-list"
                    height={32}
                    width={32}
                />
        </Navbar.Brand>
        <Navbar.Brand className={styles.appIcon} href='/'>
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