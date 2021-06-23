const reducer = (state, action) => {
    switch (action.type){
        case 'INC':
            const newCountInc = state.count > 4 ? state.count : state.count + 1
            return {...state, count: newCountInc}
        case 'DEC':
            const newCountDec = state.count < 2 ? state.count : state.count - 1
            return {...state, count: newCountDec}
        case 'F_STEP':
            return {
                ...state,
                firstStep: {
                    ...state.firstStep,
                    ...action.payload,
                }
            }
        case 'S_STEP':
            return {
                ...state,
                secondStep: {
                    ...state.secondStep,
                    ...action.payload,
                }
            }
        case 'T_STEP':
            return {
                ...state,
                thirdStep: {
                    ...state.thirdStep,
                    ...action.payload,
                }
            }
        case 'FO_STEP':
            return {
                ...state,
                fourthStep: {
                    ...state.fourthStep,
                    ...action.payload,
                }
            }
        default:
            return state
    }
}


export default reducer