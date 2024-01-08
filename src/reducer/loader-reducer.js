const initialState = {
    loaderTodo: false,
    loaderAdd: false,
    loaderDelete: false,
    loaderUpdete: false,
    loaderSort: false,
};

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADER_TODOS': {
            return {
                ...state,
                loaderTodo: action.payload,
            }

        }
        case 'LOADER_ADD': {
            return {
                ...state,
                loaderAdd: action.payload,
                loaderTodo: action.payload,

            }

        }
        case 'LOADER_DELET': {
            return {
                ...state,
                loaderDelete: action.payload,
                loaderTodo: action.payload,

            }

        }
        case 'LOADER_UPDETE': {
            return {
                ...state,
                loaderUpdete: action.payload,
                loaderTodo: action.payload,

            }

        }
        case 'LOADER_SORT': {
            return {
                ...state,
                loaderSort: action.payload,
            }

        }
        default:
            return state
    }
}