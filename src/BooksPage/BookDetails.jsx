import { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { useParams, Link} from "react-router-dom"
import { getBook } from "../api/books";

export default function BookDetails() {
    const { id } = useParams();
    const { token } = useAuth();
    const [book, setBook] = useState(null);

    useEffect(() => {
        async function fetchBook() {
            const data = await getBook(id);
            setBook(data)
        }

        fetchBook();
    }, [id]);

    if (!book) {
        return <p>waiting for activity to load</p>
    }


    return (
        <section>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.description}</p>
        </section>
    )
}