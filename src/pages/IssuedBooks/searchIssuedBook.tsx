import { Flex } from "antd"
import { Modal } from "../../components"
import SearchComponent from "../../components/SearchBar/SearchComponent"
import SearchButton from "./searchButton"
import "../AllBooks/books.css"
import IssueModal from "../../components/Modal/issue"

const searchIssuedBook = () => {
  return (
   
        <>
          <div className='table-title-container'>
            <div className='Enteries'>
              <Flex>
            <h2>Issued Books</h2> &nbsp;&nbsp;
            <p><span style={{color:"#6941C6"}}>100 Enteries</span></p>
        </Flex>
            </div>
            <div className='search-Items'>
              <IssueModal/>
              <SearchComponent />
              <SearchButton />
            </div>
          </div>
        </>
      
  )
}

export default searchIssuedBook