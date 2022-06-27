import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOfIceCream: 20,
}
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state = initialState, action) => {
            state.numOfIceCream--
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered'] : (state) => {
    //         state.numOfIceCream--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state, action) => {
            state.numOfIceCream--
        })
    }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions