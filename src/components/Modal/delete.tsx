import { Modal, Button, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useDelete, useInvalidate } from "@refinedev/core";
import { Books } from "../../types/books";

const DeleteModal = ({ open, onClose, book }: { open: boolean; onClose: () => void; book: Books | null }) => {
  const { mutate } = useDelete();
  const invalidate = useInvalidate();

  const handleDelete = () => {
    if (!book) return;

    mutate(
      { resource: "delete-book", id: book.book_id },
      {
        onSuccess: () => {
          message.success("Book deleted successfully!");
          invalidate({ resource: "view-books", invalidates: ["list"] });
          onClose();
        },
        onError: () => {
          message.error("Failed to delete the book.");
        },
      }
    );
  };

  return (
    <Modal
      open={open}
      title="Confirm Delete"
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="delete" type="primary" danger onClick={handleDelete}>
          Delete
        </Button>,
      ]}
    >
      <p>
        <ExclamationCircleOutlined style={{ color: "red", marginRight: 8 }} />
        Are you sure you want to delete <strong>{book?.book_name}</strong>? This action cannot be undone.
      </p>
    </Modal>
  );
};

export default DeleteModal;
