import Navigation from "../../components/Navbar/navigation"
import { Modal } from "../../components"
import { Header } from "../../components"
import SearchComponent from "../../components/SearchBar/SearchComponent"
import { Outlet } from "react-router"

const HomePage = () => {
  return (
    <>
        <Header/>
        <Navigation/>
        <Outlet/>

    </>
  )
}

export default HomePage