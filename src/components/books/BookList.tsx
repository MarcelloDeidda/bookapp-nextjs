import BookPreviewLink from "./BookPreviewLink";
import classes from "./BookList.module.css";

import { bookInterface } from "@/lib/interfaces";

const BookList = ({ books }: { books: bookInterface[]}) => {
    const bookPreviewElements = books.map(book => {
        return <BookPreviewLink
            id={book.id}
            imgUrl={book.imgUrl}
            title={book.bookTitle}
            key={book.id}
        />
    });
    return <div className={classes["book-list"]}>
        {bookPreviewElements}
    </div>
}


export default BookList;