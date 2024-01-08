export const SortingTodos = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOADER_SORT',
            payload: true,
        })
            fetch(`http://localhost:3000/Tasks?_sort=title&_order=asc`)
                .then((loadedData) => loadedData.json())
                .then((loadedTodos) => {
                    dispatch({
                        type: 'SORTING_TODOS',
                        payload: loadedTodos
                    })
                    console.log('Задачи отсортированы', loadedTodos)
                })
                .finally(() => dispatch({
                    type: 'LOADER_SORT',
                    payload: false,
                }))
    }
}