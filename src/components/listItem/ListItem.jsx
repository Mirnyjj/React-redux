import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckIcon from '@mui/icons-material/Check';

import './ListItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { deletingTodos, updetingTodos } from '../../actions';
import { selectLoaderState } from '../../selectors';

// eslint-disable-next-line react/prop-types
function ListItem({ id, title}) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [newText, setNewText] = useState('')
    const dispatch = useDispatch();
  const loader = useSelector(selectLoaderState)



    const onChange = ({ target }) => {
        setNewText(target.value)
    }

    const onOpenUpdateTask = () => setIsEditMode(true);
    const onCloseUpdateTask = () => setIsEditMode(false);


    return (
        <li key={id} id={id} className='todosItem'>
            {isEditMode ?
                <>
                    <input
                        name='todo'
                        type='text'
                        placeholder={title}
                        value={newText}
                        onChange={onChange}
                    />
                    <button disabled={loader.loaderUpdete} className='ButtonReady' onClick={() => { dispatch(updetingTodos(id, newText)), onCloseUpdateTask() }}>
                        <CheckIcon />
                    </button>
                </>

                : <>
                    {title}
                    <button className='ButtonEdit' disabled={isEditMode} onClick={onOpenUpdateTask}>
                        <EditNoteIcon />
                    </button>
                    <button className='ButtonDelete' disabled={isEditMode && loader.loaderDelete} onClick={() => dispatch(deletingTodos(id))}>
                        <DeleteOutlineIcon />
                    </button>
                </>
            }
        </li>
    )
}
export default ListItem
