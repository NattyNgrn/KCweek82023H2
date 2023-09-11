const Item = ({ item }) => {
    return (
        <>
        {!item.text ? null : (<div className="singleitem">{item.text}</div>)}
        </>
    )
};

const item = {text: "hello"};

<Item item={item} />

export default Item;