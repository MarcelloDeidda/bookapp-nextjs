import ElementList from "@/components/UI/ElementList";
import Title from "@/components/UI/Title";

const AuthorsPage = async () => {
    const data = await fetch("http://localhost:5000/api/books/authors", {
        cache: "no-cache"
    });

    const { authors } = await data.json();
    const authorList = authors.map((author: any) => {
        return {
            elementName: author,
            id: author
        }
    })

    return <>
        <Title title="Authors" />
        <ElementList data={authorList} role={"authors"} />
    </>
}

export default AuthorsPage;