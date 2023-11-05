"use client"

import Link from "next/link";

import classes from "./Navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const checkActiveLink = (pathname: string, segment: string): boolean => {
        return pathname.split("/").includes(segment);
    }
    
    const pathname = usePathname();
    return <nav className={classes.navbar}>
        <Link className={checkActiveLink(pathname, "books") ? classes.active : ""} href="/books">Books</Link>
        <Link className={checkActiveLink(pathname, "authors") ? classes.active : ""} href="/authors">Authors</Link>
        <Link className={checkActiveLink(pathname, "categories") ? classes.active : ""} href="/categories">Categories</Link>
        <Link className={checkActiveLink(pathname, "new-book") ? classes.active : ""} href="/new-book">New Book</Link>
    </nav>;
}

export default Navbar;