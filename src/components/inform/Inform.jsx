import { useSelector } from 'react-redux';
import './inform.css'
import { selectDraw, selectIsVictory, selectPlayer } from '../../selectors';

export const Inform = () => {
    const draw = useSelector(selectDraw);
    const isVictory = useSelector(selectIsVictory);
    const player = useSelector(selectPlayer);
    const state = isVictory ? `Выиграл ${player}` : draw ? 'Ничья' : `Сейчас ходит ${player}`
    return <InformLoyout state={state} />
}
// eslint-disable-next-line react/prop-types
const InformLoyout = ({ state }) => {
    return <h1>{state}</h1>
}

