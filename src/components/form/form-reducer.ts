import { formActionKind } from "@/lib/enums";
import { formAction, bookStateInterface } from "@/lib/interfaces";

export const formReducer = (prevState: bookStateInterface, action: formAction): bookStateInterface => {
    const { type, value } = action;

    switch (type) {
        case formActionKind.TITLE:
            return {
                ...prevState,
                bookTitle: value
            };
        case formActionKind.AUTHOR:
            return {
                ...prevState,
                author: value
            };
        case formActionKind.IMGURL:
            return {
                ...prevState,
                imgUrl: value
            };
        case formActionKind.SUMMARY:
            return {
                ...prevState,
                summary: value
            };
        case formActionKind.YEAR:
            return {
                ...prevState,
                year: value
            };
        default:
            return prevState;
    }
}