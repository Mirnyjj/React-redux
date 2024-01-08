/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks";
import { useDispatch } from "react-redux";
import { searchingTodos } from "../../actions";
function SearchForTodos() {
    const [seachText, setSeachText] = useState('')
    const dispatch = useDispatch();

    const onChange = ({ target }) => {
        setSeachText(target.value)
    }

    const debouncedSearchText = useDebounce(seachText)

    useEffect(() => {
       dispatch(searchingTodos(seachText))
    }, [debouncedSearchText])

    return (
        <input
            name='seachTodos'
            type='text'
            placeholder='Введите задачу для поиска'
            value={seachText}
            onChange={onChange}
        />
    )
}

export default SearchForTodos