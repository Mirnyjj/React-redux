import { winningCombinations } from "../constArr/winningСombinations";

export const check = (buttonState) => {
return buttonState.every((elem) => elem);
};

export const winCheck = (buttonState, player) => {
 return winningCombinations.some((comb) => comb.every((ind) => buttonState[ind] === player))
}