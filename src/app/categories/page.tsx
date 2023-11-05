import ElementList from "@/components/UI/ElementList";
import Title from "@/components/UI/Title";

const CategoriesPage = async () => {
    const data = await fetch("http://localhost:5000/api/books/categories", {
        cache: "no-cache"
    });

    const { categories } = await data.json();
    const categoryList = categories.map((category: any) => {
        return {
            elementName: category,
            id: category
        }
    })
    return <>
        <Title title="Categories" />
        <ElementList data={categoryList} role={"categories"} />
    </>
}

export default CategoriesPage;