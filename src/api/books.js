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
