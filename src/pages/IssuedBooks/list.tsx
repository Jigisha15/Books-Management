import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import type { TableProps } from "antd";
import { Home } from "../Home";

interface DataType {
  id: string;
  name: string;
  department: string;
  book_borrowed: string;
  date_of_borrowing: string;
}


const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Book Borrowed',
    key: 'book_borrowed',
    dataIndex: 'book_borrowed',
  },
  {
    title: 'Data of borrowing',
    dataIndex:'date_of_borrowing',
    key: 'action',
  },
];

const data: DataType[] = [
  {
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },
  {
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },{
    id: '1',
    name: 'Bhumi Jain',
    department: 'Electronics',
    book_borrowed: 'Phoenix Baker',
    date_of_borrowing: '25-01-25',
  },
  
];
const list = () => {
  const pageSize = 5;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = data.slice(startIndex, startIndex + pageSize);
  
    const nextPage = () => {
      if (currentPage < Math.ceil(data.length / pageSize)) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  return (
    <>
          <Home />
          <Table<DataType>
            columns={columns}
            dataSource={paginatedData}
            rowKey="id"
            pagination={false}
          />    
          <Space style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
            <Button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <span>
              Page {currentPage} of {Math.ceil(data.length / pageSize)}
            </span>
            <Button onClick={nextPage} disabled={currentPage === Math.ceil(data.length / pageSize)}>
              Next
            </Button>
          </Space>
        </>

  )
}

export default list

