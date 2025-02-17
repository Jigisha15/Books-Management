import { useState } from "react";
import { Table, Button, Space} from "antd";
import type { TableProps } from "antd";
import { Home } from "../Home";
import { useList } from "@refinedev/core";
import { Books } from '../../types/books'

const columns: TableProps<Books>['columns'] = [
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

const List = () => {
  const { data } = useList<Books>({
    resource: "view-books",
  });


  const books = data?.data || [];
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = books.slice(startIndex, startIndex + pageSize);

  const nextPage = () => {
    if (currentPage < Math.ceil(books.length / pageSize)) {
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
      <Table<Books>
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
          Page {currentPage} of {Math.ceil(books.length / pageSize)}
        </span>
        <Button onClick={nextPage} disabled={currentPage === Math.ceil(books.length / pageSize)}>
          Next
        </Button>
      </Space>
    </>
    
  )
}

export default List



