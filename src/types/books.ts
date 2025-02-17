export interface Books {
  book_id: string;
  book_name: string;
  department: string;
  book_authur: string;
  date_of_borrowing: string;
}

export interface IssuedBooks {
    book_id: string;
    book_name: string;
    department: string;
    book_author: string;
    date_of_borrowing: string;
  }

export interface Values {
    book_name: string,
    book_author: string,
    book_edition: string,
    book_publisher: string,
    book_borrowed:boolean,
    book_publish_year: string,
    date_of_borrowing: string,
    department: string
}
  