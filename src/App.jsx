import './App.css';
import ListItem from './components/listItem/ListItem';
import SearchForTodos from './components/searchTodos/SearchTodos';
import SortTasksAlphabetically from './components/sortingTasks/SortingTasks';
import AddingTask from './components/addTodo/AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { loadingTodos } from './actions';
import { selectLoaderState, selectTodosState } from './selectors';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingTodos())
  }, [])
  const todos = useSelector(selectTodosState)

  const loader = useSelector(selectLoaderState)

  return (

    <div className='boardWrapper'>
      {loader.loaderTodo ? (
        <span className="loader"></span>
      ) : (
        <div className='board'>
          <h1> Список дел</h1>

          <>
            <AddingTask/>
            <div className='SortAndSearch'>
              <SearchForTodos/>
              <SortTasksAlphabetically/>
            </div>
            {todos.length === 0 ? 'Дела не запланированы' :
              (<ul className='todos'>
                { Object.entries(todos)
                    .map(([ind, { id, title }]) =>
                  <ListItem key={ind} id={id} title={title}/>
                )}
              </ul>)
            }

          </>

        </div>
      )}
    </div>

  );
}


export default App
