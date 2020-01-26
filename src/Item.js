import React, { useState } from 'react'

import styled from 'styled-components'

import UpdateForm from './UpdateForm'

const Item = ({ id, content, deleteTodo, updateTodo }) => {

    const [isDone, setIsDone] = useState(false)
    const renderLine = isDone ? 'line-through':'none'
    const defaultCheck = isDone ? 'checked':''

    // updateFlgやisEditing等、真偽値であることを示す名称が良いです。
    const [update,setUpdate] = useState(false)    
    // const [value, setValue] = useState('')
    
    
    const handleDelete = (e) => {
        e.preventDefault()
        deleteTodo(id)
    }
    
    const itemContent = () => {
        return(
            <>
                <ContentSide>
                    <input
                        type="checkbox" 
                        onChange={() => {
                            setIsDone(!isDone)
                        }} 
                        checked = {defaultCheck}
                    />
                    <TodoContent style={{textDecoration:renderLine}}>{content}</TodoContent>
                </ContentSide>
                <div>
                    <button
                        onClick={handleDelete}
                        >削除</button>
                    <button
                        onClick={() => {
                            setUpdate(!update)
                        }} 
                    >更新</button>
                </div>
            </>
        )
    }
    
    // 下記はコンポーネント化し、必要なprops(setValue等)を渡す形式にする手もあります。
    // const handleSubmit = (e) => {
    //     e.preventDefault()
        
    //     if(!value) {
    //         setUpdate(!update)  
    //         return
    //     }

    //     updateTodo(id, value)
    //     setValue('')
    //     setUpdate(!update)
    // }

    // const itemUpdate = () => {
    //     return(
    //         <form onSubmit={handleSubmit}>
    //             <input 
    //                 type="text"
    //                 onChange={e => {setValue(e.target.value)}}
    //                 value={value}
    //             />
    //             <button button type="submit">完了</button>
    //         </form>
    //     )
    // }
    
    // const renderItem =　update ? itemUpdate() : itemContent() 
   
    return(
        <TodoItem>
            {
                update ?
                <UpdateForm /> :
                itemContent()
            }
        </TodoItem>
    )
}

const TodoItem = styled.li `
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TodoContent = styled.p `
    margin-left: 10px;
    width: 200px;
    font-size: 2.0rem;
    word-break: break-all;
` 

const ContentSide = styled.div `
    display: flex;
    align-items: center;
`

export default  Item