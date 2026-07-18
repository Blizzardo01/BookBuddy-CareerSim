import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";
import { checkoutBook } from "../api/books";

export default function BookList({ books, syncBooks }) {
    return (
        <ul>
            {books.map((book) => (
                <BookListItem
                    key={book.id}
                    book={book}
                    syncBooks={syncBooks}
                />
            ))}
        </ul>
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
        <li>
            <Link to={`/books/${book.id}`}>
                <p>{book.title}</p>
            </Link>

            {token && book.available && (
                <button onClick={handleCheckout}>
                    Checkout
                </button>
            )}

            {!book.available && (
                <p>Currently unavailable</p>
            )}
        </li>
    );
}