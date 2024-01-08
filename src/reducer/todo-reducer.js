const initialState = [];

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_TODOS': {
            return {
                ...state,
                ...action.payload,
            }

        }
        case 'SORTING_TODOS': {
            return {
                ...action.payload,
            }

        }
        case 'SEARCH_TODOS': {
            return {
                ...action.payload,
            }

        }
        case 'ADD_TODOS': {
            return {
                ...state,
                ...action.payload,
            }

        }
        default:
            return state
    }
}