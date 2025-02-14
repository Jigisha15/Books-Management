import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import styled from "styled-components";
import { useCreate } from "@refinedev/core";

interface Values {
    book_id: number,
    book_name: string,
    book_author: string,
    book_publisher: string,
    book_publish_year: Date,
    book_borrowed: boolean;
    date_of_borrowing: Date;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 10px;
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 24px;
  }
`;

const Update = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<Values>();
  const [open, setOpen] = useState(false);

  const onCreate = (values: Values) => {
    console.log("Received values of form: ", values);
    setFormValues(values);
    setOpen(false);
  };

  // const AddBook = () => {
  //   const { mutate } = useCreate();
  
  //   const onFinish = (values: any) => {
  //     mutate({
  //       resource: "Name", 
  //       values,
  //     });
  //   };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Book
      </Button>

      <StyledModal
        open={open}
        title="Add Book"
        okText="Create"
        cancelText="Cancel"
        onCancel={() => setOpen(false)}
        destroyOnClose
        footer={[
        
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Add Book
          </Button>,
        ]}
        width={{xxl:'90%'}}
      >
        <Form
          form={form}
          layout="vertical"
          name="book_form"
          onFinish={onCreate}
        >
          <GridContainer>
            <Form.Item
              name="bookId"
              label="Book ID"
              rules={[{ required: true, message: "Enter Book ID" }]}
            >
              <Input placeholder="Enter Book ID" />
            </Form.Item>

            <Form.Item
              name="bookName"
              label="Name of the book"
              rules={[{ required: true, message: "Enter Name of the book" }]}
            >
              <Input placeholder="Enter Book Name" />
            </Form.Item>

            <Form.Item
              name="authorName"
              label="Name of Author"
              rules={[{ required: true, message: "Enter Name of Author" }]}
            >
              <Input placeholder="Enter Author Name" />
            </Form.Item>

            <Form.Item
              name="bookEdition"
              label="Book Edition"
              rules={[{ required: true, message: "Enter Book Edition" }]}
            >
              <Input placeholder="Enter Book Edition" />
            </Form.Item>

            <Form.Item
              name="publisherName"
              label="Name of Publisher"
              rules={[{ required: true, message: "Enter Name of Publisher" }]}
            >
              <Input placeholder="Enter Publisher Name" />
            </Form.Item>

            <Form.Item
              name="publicationYear"
              label="Publication Year"
              rules={[{ required: true, message: "Enter Publication Year" }]}
            >
              <Input placeholder="Enter Year" />
            </Form.Item>
          </GridContainer>
        </Form>
      </StyledModal>
    </>
  );
};

export default Update;