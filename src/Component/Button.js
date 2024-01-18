import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../Action/Index';

const Button = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className='quantity'>
        <button className='quantity_minus' title='Decrement' onClick={() => dispatch(decNumber())}><span>-</span></button>
        <input name='quantity' type='text' className="quantity_input" value={myState}></input>
        <button className='quantity_plus' title='Increment' onClick={() => dispatch(incNumber())}><span>+</span></button>
      
    </div>
  )
}

export default Button