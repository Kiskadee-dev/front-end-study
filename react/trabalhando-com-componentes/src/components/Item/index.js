const Item = (props) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-primary">
            {props.texto}
        </a>
    );
}

export default Item;