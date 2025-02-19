import { useState } from "react";
import { Table, Button, Space, Divider, Flex } from "antd";
import type { TableProps } from "antd";
import { useList } from "@refinedev/core";
import { Books } from "../../types/books";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditModal from "../../components/Modal/edit";
import DeleteModal from "../../components/Modal/delete";
import './books.css'
import SearchBooks from './searchBooks'

const List = () => {
  const { data } = useList<Books>({ resource: "view-books" });

  const books = data?.data || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Books | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Custom Pagination
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = books.slice(startIndex, startIndex + pageSize);

  const handleEdit = (record: Books) => {
    setSelectedBook(record);
    setIsEditModalOpen(true);
  };

  const handleDelete = (record: Books) => {
    setSelectedBook(record);
    setIsDeleteModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedBook(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedBook(null);
  };

  const columns: TableProps<Books>["columns"] = [
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
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space className="TableSpace">
          <Button className="TableBtn" icon={<DeleteOutlined />} onClick={() => handleDelete(record)}/>                                
          <Button className="TableBtn" icon={<EditOutlined />} onClick={() => handleEdit(record)}/>
        </Space>
      ),
    },
  ];

  return (
    <>
    <Table<Books>
  columns={columns}
  dataSource={paginatedData}
  rowKey="book_id"
  pagination={false}
  className="Table_Book"
  title={() => (
    <>
      <SearchBooks/>
    </>
  )}
  footer={() => (
    <>
    <Space style={{ display: "flex", justifyContent: "space-between"}}>
      <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
        Previous
      </Button>
      <span>
        Page {currentPage} of {Math.ceil(books.length / pageSize)}
      </span>
      <Button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(books.length / pageSize)))}
        disabled={currentPage === Math.ceil(books.length / pageSize)}
      >
        Next
      </Button>
    </Space>
    </>
  )}
/>
<EditModal open={isEditModalOpen} onClose={handleCloseEditModal} book={selectedBook} />
      <DeleteModal open={isDeleteModalOpen} onClose={handleCloseDeleteModal} book={selectedBook} />
</>
  );
};

export default List;
