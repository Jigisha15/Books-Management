import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

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

const List = () => {
  return (
    <>
        <Table<DataType> columns={columns} dataSource={data} />;
    </>
  )
}

export default List

