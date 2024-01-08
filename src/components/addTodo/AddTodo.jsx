/* eslint-disable react/prop-types */
import { useState } from "react";
import './AddTodo.css'
import AddIcon from '@mui/icons-material/Add';
import { addTodos } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { selectLoaderState } from "../../selectors";


function AddingTask() {
    const [text, setText] = useState('')
    const dispatch = useDispatch();
  const loader = useSelector(selectLoaderState)


    const onChange = ({ target }) => {
        console.log(target.value);
        setText(target.value)
    }


    return (
        <div className="AddTodoStyle">
            <input className="InputAdd"
                name='todo'
                type='text'
                placeholder='Введите новую задачу'
                value={text}
                onChange={onChange}
            />
            <button className="ButtonAdd" disabled={loader.loaderAdd} onClick={() => dispatch(addTodos(text))}>
                <AddIcon />
            </button>
        </div>
    )
}

export default AddingTask