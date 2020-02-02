import React from 'react'
import styled from 'styled-components'

import Item from './Item'

const List = ({ todos, deleteTodo, updateTodo }) => {

    // ここでitemUpdateかitemかここで選ぶ？
    // const renderItem =　update ? itemUpdate() : itemContent() 

    return (
        <ItemList>
            {
                todos.map((todo) => <Item id={todo.id} key={todo.id} content={todo.content} deleteTodo={deleteTodo} updateTodo={updateTodo}></Item>)
            }
        </ItemList>
    )
}

const ItemList = styled.ul `
    /* margin-top: 50px; */
    margin: 0 auto;
    width: 450px;
`

export default List