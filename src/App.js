import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import Form from './Form'
import List from './List'

import axios from 'axios'

const App = () => {
    const [todos, setTodos] = useState([])

    // axios.get('http://localhost:3001/todos')
    //     .then(res => {
    //         // setTodos(res.data)
    //         // console.log(res.data)
    //     })

    // useEffectでレンダリング後に関数を実行する
    // 最後の[]で1回だけ呼ぶ
    useEffect(()=> {
        axios.get('http://localhost:3001/todos')
            .then(res => {
                setTodos(res.data)
            })
    },[])

    const addTodo = (content) => {
        // const newTodos = [
        //     ...todos,
        //     value
        // ]
        // setTodos(newTodos)
        const newTodo = {
            // content:content と同じ
            content
        }

        axios.post('http://localhost:3001/todos', newTodo)
            .then(res => {
                setTodos(todos.concat(res.data))
            })
    }

    const deleteTodo = (id) => {        
        // const newTodos = todos.filter((todo, index) => index !== id)
        // setTodos(newTodos)
        axios.delete(`http://localhost:3001/todos/${id}`)
        .then(res => {
            if(res.status !== 200) {
                return
            }
            setTodos(todos.filter((todos) => todos.id !== id))
        })
    }

    // put 全部置き換え　patch　一部置き換え

    const updateTodo = (id, value) => {
        // const newTodos = [...todos]
        // newTodos[id] = value
        // setTodos(newTodos)
        axios.patch(`http://localhost:3001/todos/${id}`,{content: value})
            .then(res => {
                // const newTodos = [...todos]
                // newTodos[id] = value
                // setTodos(newTodos)
                // console.log(res.data);
                
                const index = todos.findIndex(res => res.id === id)
                // todos.splice(index, 1, newTodo)
                // console.log(todos);
                todos.splice(index, 1, res.data)
                console.log(todos);
                setTodos(todos)
            })
    }



    return(
        <>
            <GlobalStyle/>
            <Title>Todo APP</Title>
            <Form addTodo={addTodo}></Form>
            <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}></List>
        </>
    )
}

const Title = styled.h1`
    padding: 40px 0 ;
    text-align: center;
    font-size: 4.0rem;
`

export default App