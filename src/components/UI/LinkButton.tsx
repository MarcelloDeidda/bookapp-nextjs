import Link from "next/link";

import classes from "./LinkButton.module.css";

const LinkButton = ({ elementName, role }: { elementName: string, role: string }) => {
    return <Link className={classes["link-button"]} href={`/${role}/${elementName}`}>{elementName}</Link>
}

export default LinkButton;