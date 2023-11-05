import LinkButton from "@/components/UI/LinkButton";

import classes from "./ElementList.module.css";

const ElementList = ({
    data, role
}: {
    data: { elementName: string, id: string}[],
    role: string
}) => {
    const authorList = data.map(element => <LinkButton key={element.id} elementName={element.elementName} role={role} />)

    return <div className={classes["element-list"]}>
        {authorList}
    </div>;
}

export default ElementList;