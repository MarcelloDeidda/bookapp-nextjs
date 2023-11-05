import Title from "@/components/UI/Title";
import BookList from "@/components/books/BookList";

const AuthorPage = async ({ params }: { params: { authorName: string } }) => {
    const authorName = decodeURIComponent(params.authorName);

    const data = await fetch(`http://localhost:5000/api/books/authors/${authorName}`, {
        cache: "no-cache"
    });

    const { books: fetchedBooks } = await data.json();
    
    const books = fetchedBooks.map((book: any) => {
        return {
            id: book.id,
            bookTitle: book.title,
            author: book.author,
            summary: book.summary,
            year: book.year,
            imgUrl: book.imgUrl
        }
    })

    return <>
        <Title title={`Books by ${authorName}`} />
        <BookList books={books} />
    </>
}

export default AuthorPage;