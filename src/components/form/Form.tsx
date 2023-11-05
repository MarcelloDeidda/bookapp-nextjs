"use client"

import { FormEvent, useReducer } from "react";

import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import { formReducer } from "./form-reducer";

import { bookStateInterface } from "@/lib/interfaces";
import { formActionKind } from "@/lib/enums";

import classes from "./Form.module.css";

const Form = ({ createBookHandler }: { createBookHandler: any }) => {
    const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const body: bookStateInterface = {
            bookTitle: e.currentTarget.bookTitle.value,
            author: e.currentTarget.author.value,
            year: e.currentTarget.year.value,
            summary: e.currentTarget.summary.value,
            imgUrl: e.currentTarget.imgUrl.value,
        };

        console.log(body)

        await createBookHandler(body);
    }

    const initialState: bookStateInterface = {
        bookTitle: "",
        author: "",
        year: "",
        summary: "",
        imgUrl: ""
    }

    const [bookFormState, dispatchBookFormState] = useReducer(formReducer, initialState);

    return <form className={classes.form} onSubmit={formSubmitHandler}>
        <FormInput
            actionType={formActionKind.TITLE}
            dispatchBookFormState={dispatchBookFormState}
            type={"text"}
            name={"bookTitle"}
            value={bookFormState.bookTitle}
            labelText={"Title"}
        />
        <FormInput
            actionType={formActionKind.AUTHOR}
            dispatchBookFormState={dispatchBookFormState}
            type={"text"}
            name={"author"}
            value={bookFormState.author}
            labelText={"Author"}
        />
        <FormInput
            actionType={formActionKind.YEAR}
            dispatchBookFormState={dispatchBookFormState}
            type={"number"}
            name={"year"}
            value={bookFormState.year}
            labelText={"Year of Publication"}
        />
        <FormTextarea
            actionType={formActionKind.SUMMARY}
            dispatchBookFormState={dispatchBookFormState}
            name={"summary"}
            value={bookFormState.summary}
            labelText={"Summary"}
        />
        <FormInput
            actionType={formActionKind.IMGURL}
            dispatchBookFormState={dispatchBookFormState}
            type={"text"}
            name={"imgUrl"}
            value={bookFormState.imgUrl}
            labelText={"Image URL"}
        />
        <button type="submit">Submit</button>
    </form>
}

export default Form;