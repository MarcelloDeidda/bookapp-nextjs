import Title from "@/components/UI/Title";
import BookList from "@/components/books/BookList";

const CategoryPage = async ({ params }: { params: { categoryName: string } }) => {
    const categoryName = decodeURIComponent(params.categoryName);

    const data = await fetch(`http://localhost:5000/api/books/categories/${categoryName}`, {
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
        <Title title={`${categoryName} Books`} />
        <BookList books={books} />
    </>
}

export default CategoryPage;