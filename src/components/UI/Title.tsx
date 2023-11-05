import classes from "./Title.module.css";

const Title = ({ title }: { title: string }) => {
    return <h1 className={classes.title}>{title}</h1>
}

export default Title;