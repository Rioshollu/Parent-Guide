const BASE_URL = 'https://db-parent-guide.up.railway.app';

async function getArticles() {
    const response = await fetch(`${BASE_URL}/article`);
    const responseJson = await response.json();

    // console.log(responseJson);
    return responseJson;
}

export {
    getArticles,
}