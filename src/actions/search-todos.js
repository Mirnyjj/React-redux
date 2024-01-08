export const searchingTodos = (value) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/Tasks?title_like=${value}`)
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
                    dispatch({
                        type: 'SEARCH_TODOS',
                        payload: loadedTodos
                    })
                    console.log('Задача найдена', loadedTodos)
                })
    }
}