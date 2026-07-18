import { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { useParams, Link } from "react-router-dom";
import { getBook, checkoutBook } from "../api/books";

export default function BookDetails() {
    const { id } = useParams();
    const { token } = useAuth();
    const [book, setBook] = useState(null);

    useEffect(() => {
        async function fetchBook() {
            const data = await getBook(id);
            setBook(data);
        }

        fetchBook();
    }, [id]);


    const handleCheckout = async () => {
        try {
            await checkoutBook(book.id, token);
            setBook({
                ...book,
                available: false
            });
        } catch (error) {
            alert(error.message);
        }
    };


    if (!book) {
        return <p>Loading book...</p>;
    }


    return (
        <main>
            <Link to="/" className="back-link">
                ← Back to Books
            </Link>

            <section className="book-details">

                <img
                    src={book.coverimage}
                    alt={book.title}
                />

                <div className="book-details-info">

                    <h1>{book.title}</h1>

                    <h3>{book.author}</h3>

                    <p>{book.description}</p>


                    {book.available ? (
                        token ? (
                            <button onClick={handleCheckout}>
                                Checkout Book
                            </button>
                        ) : (
                            <p>
                                <Link to="/login">
                                    Log in
                                </Link>{" "}
                                to reserve this book.
                            </p>
                        )
                    ) : (
                        <button disabled>
                            Currently unavailable
                        </button>
                    )}

                </div>

            </section>
        </main>
    );
}