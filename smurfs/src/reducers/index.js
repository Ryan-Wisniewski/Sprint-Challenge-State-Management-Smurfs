import {} from '../actions'

export const initialState = {
    smurfs: []
}

export const reducers = (state= initialState, action) => {
    switch(action.type){
        case 'FETCH_API_DATA_START':
            return {
                ...state,
            }
        case 'FETCH_API_DATA_SUCCESS':
            return {
                ...state,
                smurfs: action.payload
            }
        case 'ADD_MEMBER':
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    { name: action.payload, age: action.payload, height: action.payload }
                ]
            }
        default:
            return state
    }
}