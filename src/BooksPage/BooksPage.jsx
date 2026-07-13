import { useState, useEffect } from "react";
import { getBooks } from "../api/books";
import {useAuth} from "../auth/AuthContext"
import BookList from "./BookList";

export default function BooksPage() {
    const [books, setBooks] = useState([]);
    const { token } = useAuth();

    const syncBooks = async () => {
        const data = await getBooks();
        setBooks(data);
    } 

    useEffect(() => {
        syncBooks()
    }, []);

    return (
        <>
        <h1>Books</h1>
        <BookList books={books} syncBooks={syncBooks}/>
        </>
    )
}