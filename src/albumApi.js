const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getAlbumsApi = async (path) => {
    console.log("call get albums api");
    const response = await fetch(`${BASE_URL}${path}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response.json();
};