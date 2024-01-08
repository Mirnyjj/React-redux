export const addTodos = (text) => {

    return (dispatch) => {
        dispatch({
            type: 'LOADER_ADD',
            payload: true,
        })
        fetch('http://localhost:3000/Tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
            title: text,
            })
        })
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
            dispatch({
                type: 'ADD_TODOS',
                payload: response,
            })
            console.log('Задача добавлена, ответ от сервера', response)
            })
        .finally(() =>         
            dispatch({
                type: 'LOADER_ADD',
                payload: false,
            })
        )
    }
}
