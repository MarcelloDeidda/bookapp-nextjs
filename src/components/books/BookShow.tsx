import BookDetails from "./BookDetails";
import classes from "./BookShow.module.css";

const BookShow = ({
    bookTitle,
    author,
    year,
    summary,
    imgUrl
}: {
    bookTitle: string,
    author: string,
    year: string,
    summary: string,
    imgUrl: string
}) => {
    return <div className={classes["book-show"]}>
        <BookDetails
            bookTitle={bookTitle}
            author={author}
            year={year}
            summary={summary}
        />
        <img src={imgUrl} />
    </div>
}

export default BookShow;