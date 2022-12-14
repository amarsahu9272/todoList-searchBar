import { useState } from "react";
import { Fragment } from "react";

function ShoppingList() {
    const items = [1, 2, 3, 4, 5]
    const [list, setlist] = useState(items);

    function addItem() {
        setlist([...list, "10"]);
    }
    return (
        <Fragment>
            <h1>Shopping List</h1>
            <ul>{list.map(item => <li>{item}</li>)}</ul>
            <input placeholder = "Add shopping Item"/>
            <button onClick = {addItem}>Add Item</button>
        </Fragment>
    )
}

export default ShoppingList