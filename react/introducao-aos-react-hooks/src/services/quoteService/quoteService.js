const quoteService = () => {
    return fetch(process.env.REACT_APP_API).then(response => response.json()).catch( (e) => console.log(`Erro ao requisitar citação: ${e}`));
}

export default quoteService;