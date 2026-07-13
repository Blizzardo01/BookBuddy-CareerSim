const API = import.meta.env.VITE_API;

export async function getBooks() {
    try {
        const response = await fetch(API + "/books");
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error(error);
    }
}
