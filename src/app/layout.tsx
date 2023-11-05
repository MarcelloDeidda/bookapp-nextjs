import Navbar from "../components/UI/Navbar";
import classes from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classes.body}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
