import SearchComponent from '../../components/SearchBar/SearchComponent'
import { Modal } from '../../components'
import { Flex, Grid } from 'antd'
import SearchButton from './searchButtton'

const searchBooks = () => {
  return (
    <>
      <div className='table-title-container'>
        <div className='Enteries'>
        <Flex>
            <h2>Books</h2>&nbsp;&nbsp;
            <p><span style={{color:"#6941C6"}}>100 Enteries</span></p>
        </Flex>
        </div>
        <div className='search-Items'>
          <Modal />
          <SearchComponent />
          <SearchButton />
        </div>
      </div>
    </>
  )
}

export default searchBooks