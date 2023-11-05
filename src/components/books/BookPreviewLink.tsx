import Link from "next/link";

import classes from "./BookPreviewLink.module.css";

const BookPreviewLink = (
    { id, imgUrl, title }: { id: string, imgUrl: string, title: string }
) => {
    return <Link key={id} className={classes.book} href={`/books/${id}`}>
        <img src={imgUrl} alt={`Cover of ${title}`} />
    </Link>
}

export default BookPreviewLink;