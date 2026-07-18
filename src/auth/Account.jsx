import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { getMe } from "../api/users";
import { getReservations, returnBook } from "../api/users";

export default function Account() {
    const { token } = useAuth();

    const [user, setUser] = useState(null);
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    const fetchAccount = async () => {
        try {
            const userData = await getMe(token);
            const reservationData = await getReservations(token);

            setUser(userData);
            setReservations(reservationData);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        if (token) {
            fetchAccount();
        }
    }, [token]);


    const handleReturn = async (reservationId) => {
        try {
            await returnBook(reservationId, token);
            await fetchAccount();
        } catch (err) {
            setError(err.message);
        }
    };


    if (!user) {
        return <p>Loading account...</p>;
    }


    return (
        <main>
            <h1>My Account</h1>

            <h2>
                {user.firstname} {user.lastname}
            </h2>

            <p>{user.email}</p>


            <h2>Checked Out Books</h2>

            {reservations.length === 0 ? (
                <p>No books checked out.</p>
            ) : (
                <ul>
                    {reservations.map((reservation) => (
                        <li key={reservation.id}>
                            <p>{reservation.title}</p>
                            <p>by {reservation.author}</p>

                            <button
                                onClick={() =>
                                    handleReturn(reservation.id)
                                }
                            >
                                Return
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {error && <p role="alert">{error}</p>}
        </main>
    );
}