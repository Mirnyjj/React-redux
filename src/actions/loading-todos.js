
export const loadingTodos = () => {
    return (dispatch) => {
      dispatch({
        type: 'LOADER_TODOS',
        payload: true,
      })
    fetch('http://localhost:3000/Tasks')
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        dispatch({
            type: 'LOADING_TODOS',
            payload: loadedTodos
        })
        console.log('вызов')
      })
      .finally(() => dispatch({
        type: 'LOADER_TODOS',
        payload: false,
    }))
  }
}
