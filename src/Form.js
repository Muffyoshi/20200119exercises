import React, {useState} from 'react'

import styled from 'styled-components'

const From = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!value) {
            alert('入力して下さい')    
            return
        }

        addTodo(value)
        
        setValue('')
    }

    return(
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={e => {setValue(e.target.value)}}
                value={value}    
            />
            <button type="submit">追加</button>
        </Form>
    )
}

const Form = styled.form `
    margin-top: 20px;
    text-align: center;
`

export default From