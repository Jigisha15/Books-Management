import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import type { TableProps } from "antd";
import { useList } from "@refinedev/core";
import { IssuedBooks } from "../../types/books"
import SearchIssuedBook from './searchIssuedBook'

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
      <Table<IssuedBooks>
        columns={columns}
        dataSource={paginatedData}
        rowKey="book_id"
        pagination={false}
        className="Table_Book"

        title={() => (
          <>
            <SearchIssuedBook />

          </>
        )}
        footer={() => (
          <>
            <Space style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
              <Button type="primary" onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </Button>
              <span>
                Page {currentPage} of {Math.ceil(IssuedBooks.length / pageSize)}
              </span>
              <Button type="primary" onClick={nextPage} disabled={currentPage === Math.ceil(IssuedBooks.length / pageSize)}>
                Next
              </Button>
            </Space>
          </>
        )}
      />

    </>

  )
}

export default list

