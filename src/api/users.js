const API = import.meta.env.VITE_API;

export async function getMe(token) {
    const response = await fetch(`${API}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message);
    }

    return result;
}


export async function getReservations(token) {
    const response = await fetch(`${API}/reservations`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message);
    }

    return result;
}


export async function returnBook(reservationId, token) {
    const response = await fetch(`${API}/reservations/${reservationId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Unable to return book");
    }
}