import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import type { TableProps } from "antd";
import { Home } from "../Home";
import { useList } from "@refinedev/core";
import { IssuedBooks } from "../../types/books"

const columns: TableProps<IssuedBooks>['columns'] = [
  {
    title: "ID",
    dataIndex: "book_id",
    key: "book_id",
  },
  {
    title: "Name",
    dataIndex: "book_name",
    key: "book_name",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Book Borrowed",
    dataIndex: "book_author",
    key: "book_borrowed",
  },
  {
    title: "Date of Borrowing",
    dataIndex: "date_of_borrowing",
    key: "date_of_borrowing",
  },
];

const list = () => {
 const { data } = useList<IssuedBooks>({
    resource: "view-books",
  });

  const IssuedBooks = data?.data || [];


  const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = IssuedBooks.slice(startIndex, startIndex + pageSize);
  
    const nextPage = () => {
      if (currentPage < Math.ceil(IssuedBooks.length / pageSize)) {
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
          <Table<IssuedBooks>
            columns={columns}
            dataSource={paginatedData}
            rowKey="book_id"
            pagination={false}
          />    
          <Space style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
            <Button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <span>
              Page {currentPage} of {Math.ceil(IssuedBooks.length / pageSize)}
            </span>
            <Button onClick={nextPage} disabled={currentPage === Math.ceil(IssuedBooks.length / pageSize)}>
              Next
            </Button>
          </Space>
        </>

  )
}

export default list

