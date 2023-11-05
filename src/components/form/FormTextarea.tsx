import { formActionKind } from "@/lib/enums";
import { formAction } from "@/lib/interfaces";
import { Dispatch } from "react";

import classes from "./Form.module.css";

const FormTextarea = ({
    actionType,
    name,
    value,
    labelText,
    dispatchBookFormState
}: {
    actionType: formActionKind,
    name: string,
    value: string,
    labelText: string,
    dispatchBookFormState: Dispatch<formAction>
}) => {
    return <div className={classes["form-input"]}>
        <label htmlFor={name}>{labelText}</label>
        <textarea rows={5} onChange={e => { dispatchBookFormState({ type: actionType, value: e.target.value }) }} name={name} value={value} id={name} />
    </div>
}

export default FormTextarea;