import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount, reset } from '../Redux/CounterSlice'


function Counter() {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.CounterSlice.count)

  const [amount,setAmount]=useState(0)
  const handleIncrement=()=>{
    if(amount>0)
    {
      dispatch(incrementbyAmount(+amount))
      setAmount("")
    }
    else{
      alert("enter valid amount")
    }
  }


  return (
    <div classNameName="App">
    <h1 className='text-center text-white mt-5'>COUNTER APP</h1>
    <div className='text-center container p-5 my-5 container w-50 shadow-lg border border-danger border-5 '>

      <h1 className='text-danger'>{count} </h1>

      <div className='text-center'>
        <button onClick={()=>dispatch(increment())} className='btn btn-success mt-5'>INCREMENT</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-info ms-5 mt-5'>RESET</button>
        <button onClick={()=>dispatch(decrement())}  className='btn btn-danger ms-5 mt-5'>DECREMENT</button>
      </div>
      <div className='d-flex justify-content-between mt-5 '>
      <input type="text" value={amount} onChange={e=>setAmount(e.target.value)} placeholder='Enter the amount to be incremented'classNameName='form-control' />
          <button onClick={handleIncrement} className='btn btn-info ms-3'>Increment by amount</button>
      </div>

    </div>
    
  </div>
  )
}

export default Counter