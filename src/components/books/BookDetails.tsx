import Link from "next/link";
import classes from "./BookDetails.module.css";

const BookDetails = ({
    bookTitle,
    author,
    year,
    summary
}: {
    bookTitle: string,
    author: string,
    year: string,
    summary: string
}) => {
    return <div className={classes["book-details"]}>
        <div>
            <h2>{bookTitle}</h2>
        </div>
        <div className={classes["book-details__row"]}>
            <p>Author</p>
            <Link href={`/authors/${author}`}>{author}</Link>
        </div>
        <div className={classes["book-details__row"]}>
            <p>Year of publication</p>
            <p>{year}</p>
        </div>
        <div className={classes["book-details__row"]}>
            <p>Summary</p>
            <p>{summary}</p>
        </div>
    </div>
}

export default BookDetails;