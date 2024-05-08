import React, { useState } from "react";

function ToDoItems(props) {
    const [itemState, setItemState] = useState(false);

    function handleLineThrough(preItem) {
        setItemState(preState => {
            return !preState;
        });

    }

    return <li

        onClick={handleLineThrough}
        style={{ textDecoration: itemState ? "line-through" : "none" }}>
        {props.text}
    </li>
}

export default ToDoItems;