const quoteService = () => {
    return fetch(process.env.REACT_APP_API).then(response => response.json());
}

export default quoteService;