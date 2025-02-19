import { SearchOutlined } from "@ant-design/icons";
import { Space, Input } from "antd";



const SearchComponent = () => {
  return (
    <div className="searchbar-container">
      <Space style={{ marginBottom: 16, width: "100%"}}>
        <Input
          placeholder="Search by Name or ID"
          allowClear
          style={{ width: 300 }}
          prefix={<SearchOutlined />} 
        />
      
      </Space>
    </div>
  )
}

export default SearchComponent