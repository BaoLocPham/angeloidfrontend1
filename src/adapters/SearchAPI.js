const fetchSearchData = async (url) => {
    var data = await fetch(url);
    data = await data.json();
    return data;
};

const search = async (url, body) => {
    var data = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    data = await data.json();
    return data;
};

export { fetchSearchData, search };
