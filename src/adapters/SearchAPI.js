const fetchTagList = async () => {
    return await fetch(`${process.env.REACT_APP_BACKEND_URL}api/tag`).then(res => res.json());
}

export {
    fetchTagList
}