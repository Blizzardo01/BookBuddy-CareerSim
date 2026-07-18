import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";
import { checkoutBook } from "../api/books";

export default function BookList({ books, syncBooks }) {
    return (
        <section className="book-grid">
            {books.map((book) => (
                <BookListItem
                    key={book.id}
                    book={book}
                    syncBooks={syncBooks}
                />
            ))}
        </section>
    );
}


function BookListItem({ book, syncBooks }) {
    const { token } = useAuth();

    const handleCheckout = async () => {
        try {
            await checkoutBook(book.id, token);
            await syncBooks();
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <article className="book-card">

            <Link 
                to={`/books/${book.id}`} 
                className="book-card-link"
            >
                <img
                    src={book.coverimage}
                    alt={book.title}
                />

                <div className="book-info">
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                </div>
            </Link>


            <div className="book-actions">
                {book.available ? (
                    token && (
                        <button onClick={handleCheckout}>
                            Checkout
                        </button>
                    )
                ) : (
                    <button disabled>
                        Currently unavailable
                    </button>
                )}
            </div>

        </article>
    );
}