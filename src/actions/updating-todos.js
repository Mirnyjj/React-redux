export const updetingTodos = (id, newText) => {
    return (dispatch) => {
        dispatch({
            type: 'LOADER_UPDETE',
            payload: true,
        })
        fetch(`http://localhost:3000/Tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
              title: newText,
            })
          })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                    dispatch({
                        type: 'LOADER_UPDETE',
                        payload: false,
                    })
                    console.log('Задача изменена, ответ от сервера', response)
                })
    }
}