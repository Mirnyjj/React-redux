export const deletingTodos = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'LOADER_DELET',
            payload: true,
        })
        fetch(`http://localhost:3000/Tasks/${id}`, {
            method: 'DELETE',
          })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                    dispatch({
                        type: 'LOADER_DELET',
                        payload: false,
                    })
                    console.log('Задача УДАЛЕНА, ответ от сервера', response)
                })
    }
}