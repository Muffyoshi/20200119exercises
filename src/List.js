import React from 'react'

import Item from './Item'

const List = ({ todos, deleteTodo, updateTodo }) => {

    // ここでitemUpdateかitemかここで選ぶ？
    // const renderItem =　update ? itemUpdate() : itemContent() 

    return (
        <ul>
            {
                todos.map((todo, index) => <Item id={index} content={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}></Item>)
            }
        </ul>
    )
}

export default List