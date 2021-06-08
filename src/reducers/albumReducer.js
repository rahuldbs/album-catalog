const INITIAL_STATE = {
    albums: undefined,
    error: undefined,
    inProgress: false
};

export const albumReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ALBUMS_REQUEST":
            return {
                ...state,
                inProgress: true
            };
        case "ALBUMS_SUCCESS":
            return {
                ...state,
                albums: action.payload.data,
                inProgress: false
            };
        case "ALBUMS_ERROR":
            return {
                ...state,
                error: action.payload.error,
                inProgress: false
            };
        default:
            return state;
    }
};