//アップデートのときはこっちを呼ぶ？
//List.jsから呼ぶのか、Item.jsから呼ぶのか

const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!value) {
        alert('入力して下さい')    
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
