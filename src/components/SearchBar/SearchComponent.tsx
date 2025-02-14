import { Table, Button, Space, Input } from "antd";

const { Search } = Input;


const SearchComponent = () => {
  return (
    <div className="searchbar-container">
      <Space style={{ marginBottom: 16, width: "100%"}}>
        <Search
          placeholder="Search by Name or ID"
          allowClear
          enterButton="Filter"
          style={{ width: 300 }}
          disabled
        />
      </Space>
      <Button disabled>Issues Books</Button>
    </div>
  )
}

export default SearchComponent