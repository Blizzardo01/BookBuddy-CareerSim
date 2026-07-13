import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom"

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


function BookListItem({ book }) {
    const { token } = useAuth();


    return (
        <li>
            <Link to={`/books/${book.id}`}>
            <p>{book.title}</p>
            </Link>
        </li>
    )
}