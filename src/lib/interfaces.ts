import { formActionKind } from "./enums"

export interface bookStateInterface {
    bookTitle: string,
    author: string,
    year: string,
    summary: string,
    imgUrl: string
}

export interface formAction {
    type: formActionKind,
    value: string
}

export interface bookInterface {
    bookTitle: string,
    author: string,
    year: string,
    summary: string,
    imgUrl: string,
    id: string
}