import React, { useState } from 'react'

const Item = ({ id, content, deleteTodo, updateTodo }) => {

    const [isDone, setIsDone] = useState(false)
    const renderLine = isDone ? 'line-through':'none'

    const [update,setUpdate] = useState(false)    
    const [value, setValue] = useState('')
    
    
    const handleDelete = (e) => {
        e.preventDefault()
        deleteTodo(id)
    }
    
    const itemContent = () => {
        return(
            <>
                <input 
                    type="checkbox" 
                    onChange={() => {
                        setIsDone(!isDone)
                    }} 
                />
                <span style={{textDecoration:renderLine}}>{content}</span>
                <button
                    onClick={handleDelete}
                    >削除</button>
                <button
                    onClick={() => {
                        setUpdate(!update)
                    }} 
                    >更新</button>
            </>
        )
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!value) {
            setIsDone(false)
            setUpdate(!update)  
            return
        }

        updateTodo(id, value)
        setValue('')
        setIsDone(false)
        setUpdate(!update)
    }

    const itemUpdate = () => {
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={e => {setValue(e.target.value)}}
                    value={value}
                />
                <button button type="submit">完了</button>
            </form>
        )
    }
    
    const renderItem =　update ? itemUpdate() : itemContent() 
   
    return(
        <li>
            {renderItem}
        </li>
    )
}

export default  Item