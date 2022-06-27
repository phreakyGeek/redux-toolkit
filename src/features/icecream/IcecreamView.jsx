import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
    const numOfIceCream = useSelector(state => state.icecream.numOfIceCream)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number Of Icecream - {numOfIceCream}</h2>
        <button onClick={() => dispatch(ordered()) }>Order Icecream</button>
        <button onClick={() => dispatch(restocked(5)) }>Restock Icecream</button>
    </div>
  )
}
