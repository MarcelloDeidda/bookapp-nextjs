import Title from "@/components/UI/Title";
import Form from "@/components/form/Form";
import { bookStateInterface } from "@/lib/interfaces";
import { redirect } from "next/navigation";
import { FormEvent } from "react";

const NewBookPage = () => {
    const createBookHandler = async (body: bookStateInterface) => {
        "use server"

        const newBook = {
            title: body.bookTitle,
            author: body.author,
            year: body.year,
            summary: body.summary,
            imgUrl: body.imgUrl,
            category: ["None", "Art"]
        }

        const res = await fetch("http://localhost:5000/api/books/", {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-cache"
        });

        const createdBook = await res.json();

        redirect(`/books/${createdBook.book.id}`);
    }

    return <>
        <Title title="New Book" />
        <Form createBookHandler={createBookHandler} />
    </>
}

export default NewBookPage;