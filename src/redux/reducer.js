import { stateObject } from "./initialState";


export const appReducer = (states = stateObject, action) => {
    const {type, payload} = action;
    console.log(states)

    switch (type) {
        case 'PLAYER_CHANGE': {
            return {
                ...states,
                player: payload,
            };
        }
        case 'CHECKING_FOR_A_DRAW': {
                return {
                    ...states,
                    draw: payload,
                };
        }
        case 'CHECKING_FOR_WINNINGS': {
            return {
                ...states,
                isVictory: payload,
            };
        }
        case 'BUTTON_STATE': {
            return {
                ...states,
                buttonState: payload,
            }
        }
        case '_RESET_': {
            return payload
        }
        default:
            return states;
    }
};