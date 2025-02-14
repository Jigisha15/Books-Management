import Navigation from "../../components/Navbar/navigation"
import { Modal } from "../../components"
import { Header } from "../../components"
import SearchComponent from "../../components/SearchBar/SearchComponent"

const HomePage = () => {
  return (
    <>
        <Header/>
        <Modal/>
        <Navigation/>
        <SearchComponent/>

    </>
  )
}

export default HomePage