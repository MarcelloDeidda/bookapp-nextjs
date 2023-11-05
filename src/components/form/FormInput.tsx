import { formActionKind } from "@/lib/enums";
import { formAction } from "@/lib/interfaces";
import { Dispatch } from "react";

import classes from "./Form.module.css";

const FormInput = ({
    actionType,
    type,
    name,
    value,
    labelText,
    dispatchBookFormState
}: {
    actionType: formActionKind,
    type: string,
    name: string,
    value: string,
    labelText: string,
    dispatchBookFormState: Dispatch<formAction>
}) => {
    return <div className={classes["form-input"]}>
        <label htmlFor={name}>{labelText}</label>
        <input onChange={e => { dispatchBookFormState({ type: actionType, value: e.target.value }) }} type={type} name={name} value={value} id={name} />
    </div>
}

export default FormInput;