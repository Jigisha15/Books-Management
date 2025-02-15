import { useState } from "react";
import { Button, Flex, Form, Input, Modal } from "antd";
import styled from "styled-components";
import { useCreate } from "@refinedev/core";
import dayjs from "dayjs";


interface Values {
    book_name: string,
    book_author: string,
    book_edition: string,
    book_publisher: string,
    book_borrowed:boolean,
    book_publish_year: string,
    date_of_borrowing: string;
    department: string
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
  const { mutate } = useCreate();


    const onFinish = (values: any) => {
      const currentDate = dayjs().format("YYYY-MM-DD");

      const updatedValues = {
        ...values,
        date_of_borrowing:currentDate,
        book_borrowed:true,
      }
      console.log("Sending Data:", updatedValues); 
      mutate({
        resource: "add-book",
        values: updatedValues
     });
     console.log(updatedValues)
    setFormValues(updatedValues);
    setOpen(false);
    };

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
        
          <Flex vertical justify="center" align="center">
            <Button key="submit" type="primary" onClick={() => form.submit()} style={{width:"10%"}}>
            Add Book
          </Button>,
          </Flex>
        ]}
        width={{xxl:'90%'}}
      >
        <Form
          form={form}
          layout="vertical"
          name="book_form"
          onFinish={onFinish}
        >
          <GridContainer>
            <Form.Item
              name="book_name"
              label="Name of the book"
              rules={[{ required: true, message: "Enter Name of the book" }]}
            >
              <Input placeholder="Enter Book Name" />
            </Form.Item>

            <Form.Item
              name="book_author"
              label="Name of Author"
              rules={[{ required: true, message: "Enter Name of Author" }]}
            >
              <Input placeholder="Enter Author Name" />
            </Form.Item>

            <Form.Item
              name="book_edition"
              label="Book Edition"
              rules={[{ required: true, message: "Enter Book Edition" }]}
            >
              <Input placeholder="Enter Book Edition" />
            </Form.Item>

            <Form.Item
              name="book_publisher"
              label="Name of Publisher"
              rules={[{ required: true, message: "Enter Name of Publisher" }]}
            >
              <Input placeholder="Enter Publisher Name" />
            </Form.Item>

            <Form.Item
              name="book_publish_year"
              label="Publication Year"
              rules={[{ required: true, message: "Enter Publication Year" }]}
            >
              <Input placeholder="Enter Year" />
            </Form.Item>

            <Form.Item
              name="department"
              label="Deparment"
              rules={[{ required: true, message: "Enter Book Department" }]}
            >
              <Input placeholder="Enter Book Department" />
            </Form.Item>
          </GridContainer>
        </Form>
      </StyledModal>
    </>
  );
};

export default Update;