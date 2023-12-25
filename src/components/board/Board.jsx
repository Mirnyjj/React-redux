import { useDispatch, useSelector} from "react-redux";
import { check, winCheck } from "../../utils/winningСheck";
import './board.css'
import { selectButtonState, selectDraw, selectIsVictory, selectPlayer} from "../../selectors/index";
export const BoardLayout = () => {
    const dispatch = useDispatch();
    const buttonState = useSelector(selectButtonState);
    const draw = useSelector(selectDraw);
    const isVictory = useSelector(selectIsVictory);
    const player = useSelector(selectPlayer);

    const clickButton = (el) => {
    
        if (draw || isVictory) return;

        const newArrButton = buttonState.map((mean, ind) => el === ind ? player : mean);
        dispatch({ type: 'BUTTON_STATE', payload: newArrButton })

        if (winCheck(newArrButton, player)) {
            dispatch({ type: 'CHECKING_FOR_WINNINGS', payload: true })
            return
        }

        if (check(newArrButton)) {
            dispatch({ type: 'CHECKING_FOR_A_DRAW', payload: true })
            return
        }

        if (player === 'X') {
            dispatch({ type: 'PLAYER_CHANGE', payload: '0' })
        } else {
            dispatch({ type: 'PLAYER_CHANGE', payload: 'X' })

        }
    console.log(buttonState)
    };
    console.log(buttonState)
    return (
        <div className="header">
            {buttonState.map((elem, index) => (
                <button className="cell" onClick={() => clickButton(index)} key={index}>
                    {elem}
                </button>))}
        </div>
    )
}



