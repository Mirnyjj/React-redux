import './App.css';
import { BoardLayout } from './components/board/board';
import { Inform } from './components/inform/Inform';
import { stateObject } from './redux';
import { store } from './redux';

export const AppLayout = () => {


    const reset = () => {
        store.dispatch({ type: '_RESET_', payload: stateObject })
        
      }

    return (
        <div>
            <Inform />
            <BoardLayout/>
            <button className='StyleButton' onClick={() => reset()}>Начать заново</button>
        </div>
    )
}

