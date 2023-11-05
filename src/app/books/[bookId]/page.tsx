import Title from "@/components/UI/Title";
import BookShow from "@/components/books/BookShow";

const BookShowPage = async ({ params }: { params: { bookId: string } }) => {
    const { bookId } = params;

    const data = await fetch(`http://localhost:5000/api/books/${bookId}`, {
        cache: "no-cache"
    });

    const { book: fetchedBook } = await data.json();

    const book = {
        id: fetchedBook.id,
        bookTitle: fetchedBook.title,
        author: fetchedBook.author,
        summary: fetchedBook.summary,
        year: fetchedBook.year,
        imgUrl: fetchedBook.imgUrl
    };

    return <>
        <Title title="Book Details" />
        <BookShow
            bookTitle={book.bookTitle}
            author={book.author}
            year={book.year}
            summary={book.summary}
            imgUrl={book.imgUrl}
        />
    </>
}

export default BookShowPage;