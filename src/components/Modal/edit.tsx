import { useEffect } from "react";
import { Button, Flex, Form, Input, Modal } from "antd";
import styled from "styled-components";
import { useCreate, useInvalidate } from "@refinedev/core";
import dayjs from "dayjs";
import { Books } from "../../types/books";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 10px;
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 24px;
  }
`;

const EditModal = ({ open, onClose, book }: { open: boolean; onClose: () => void; book: Books | null }) => {
  const [form] = Form.useForm();
  const { mutate, isLoading } = useCreate();
  const invalidate = useInvalidate();

  useEffect(() => {
    if (book) {
      form.setFieldsValue(book);
    }
  }, [book, form]);

  const onFinish = (values: Books) => {
    console.log("Updating book:", values);

    const updatedValues = {
      ...values,
      date_of_borrowing: dayjs().format("YYYY-MM-DD"),
    };

    mutate(
      { resource: "edit-book", values: updatedValues },
      {
        onSuccess: () => {
          onClose();
          invalidate({ resource: "view-books", invalidates: ["list"] });
        },
      }
    );
  };

  return (
    <StyledModal open={open} title="Edit Book" onCancel={onClose} destroyOnClose footer={null} width={{ xl: '60%' }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <GridContainer>
          <Form.Item name="book_name" label="Book Name" rules={[{ required: true, message: "Enter book name" }]}>
            <Input placeholder="Enter book name" />
          </Form.Item>

          <Form.Item name="book_author" label="Author" rules={[{ required: true, message: "Enter author name" }]}>
            <Input placeholder="Enter author name" />
          </Form.Item>

          <Form.Item name="book_edition" label="Edition" rules={[{ required: true, message: "Enter edition" }]}>
            <Input placeholder="Enter edition" />
          </Form.Item>

          <Form.Item name="book_publisher" label="Publisher" rules={[{ required: true, message: "Enter publisher" }]}>
            <Input placeholder="Enter publisher" />
          </Form.Item>

          <Form.Item name="book_publish_year" label="Publication Year" rules={[{ required: true, message: "Enter year" }]}>
            <Input placeholder="Enter publication year" />
          </Form.Item>

          <Form.Item name="department" label="Department" rules={[{ required: true, message: "Enter department" }]}>
            <Input placeholder="Enter department" />
          </Form.Item>
        </GridContainer>

        <Flex justify="center">
          <Button type="primary" onClick={() => form.submit()} loading={isLoading}>
            Update Book
          </Button>
        </Flex>
      </Form>
    </StyledModal>
  );
};

export default EditModal;
