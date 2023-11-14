export const GET = async (url: string) => {
    try {
        const response = await fetch(url);
        const body = await response.json();
        return body;
    } catch (error) {
        console.error(error);
    }
}