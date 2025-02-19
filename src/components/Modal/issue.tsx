import { useState } from "react";
    import { Button, Flex, Form, Input, Modal } from "antd";
    import styled from "styled-components";
    import { useCreate, useInvalidate } from "@refinedev/core";
    import dayjs from "dayjs";
    import { Values } from "../../types/books"
    import { PlusCircleOutlined } from "@ant-design/icons";
    
    
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
const IssueModal = () => {
    const [form] = Form.useForm();
      const [formValues, setFormValues] = useState<Values>();
      const [open, setOpen] = useState(false);
      const { mutate, isLoading } = useCreate();
      const invalidate = useInvalidate();
    
    
      const onFinish = (values: any) => {
        const currentDate = dayjs().format("YYYY-MM-DD");
    
        const updatedValues = {
          ...values,
          date_of_borrowing: currentDate,
          book_borrowed: true,
        }
        mutate(
          { resource: "add-book", values: updatedValues },
          {
            onSuccess: () => {
              setOpen(false);
              invalidate({
                              resource: "view-books",
                              invalidates: ["list"],
                            });
            }
          }
        );
        setFormValues(updatedValues);
        setOpen(false);
        console.log("end")
      };
  return (
        <>
          <Button type="primary" onClick={() => setOpen(true)}>
          <PlusCircleOutlined />
            Issue Book
          </Button>
    
          <StyledModal
            open={open}
            title="Issue Book"
            okText="Create"
            cancelText="Cancel"
            onCancel={() => setOpen(false)}
            destroyOnClose
            footer={[
              <Flex vertical justify="center" align="center">
                <Button key="submit" type="primary" onClick={() => form.submit()} style={{ width: "10%" }}>
                  Issue Book
                </Button>
              </Flex>
            ]}
            width={{ xl: '60%' }}
          >
            <Form
              form={form}
              layout="vertical"
              name="book_form"
              onFinish={onFinish}
            >
              <GridContainer>
                <Form.Item
                  name="book_id"
                  label="Enter book id"
                  rules={[{ required: true, message: "Enter Book Id" }]}
                >
                  <Input placeholder="Enter Book Id" />
                </Form.Item>
    
                <Form.Item
                  name="book_name"
                  label="Enter book name"
                  rules={[{ required: true, message: "Enter Enter book name" }]}
                >
                  <Input placeholder="Enter book name" />
                </Form.Item>
    
                <Form.Item
                  name="book_author"
                  label="Name of Author"
                  rules={[{ required: true, message: "Name of Author" }]}
                >
                  <Input placeholder="Enter author name" />
                </Form.Item>
    
                <Form.Item
                  name="book_issued"
                  label="Issued book"
                  rules={[{ required: true, message: "Enter Name of Publisher" }]}
                >
                  <Input placeholder="Enter Publisher Name" />
                </Form.Item>
    
                <Form.Item
                  name="borrowing_date"
                  label="Borrowing Data"
                  rules={[{ required: true, message: "Enter Publication Year" }]}
                >
                  <Input placeholder="Enter borrowing date" />
                </Form.Item>
    
                <Form.Item
                  name="return_date"
                  label="Return Date"
                  rules={[{ required: true, message: "Enter return date" }]}
                >
                  <Input placeholder="Enter return date" />
                </Form.Item>
              </GridContainer>
    
            </Form>
          </StyledModal>
        </>
      );
    };

export default IssueModal