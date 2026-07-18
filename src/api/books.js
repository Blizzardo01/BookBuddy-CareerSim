const API = import.meta.env.VITE_API;

export async function getBooks() {
    try {
        const response = await fetch(API + "/books");
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}

export async function getBook(id) {
    try {
        const response = await fetch(API + "/books/" + id);
        const data = await response.json();

        if (!response.ok) {
            throw Error(response.message);
        }

        return data;
    } catch (error){
        console.error(error);
        return null;
    }
}  

export async function checkoutBook(bookId, token) {
    const response = await fetch(`${API}/reservations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            bookId
        }),
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
