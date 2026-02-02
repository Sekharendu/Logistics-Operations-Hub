import { useState } from 'react'
import './App.css'
// import NextActions from './NextActions'
import logo from './assets/logo.png'
import { useReducer } from 'react';
import { initialOrderState , reducer } from './useOrderWorkflow.js'

function App() {

  let timeNow=new Date().toLocaleTimeString();
  const today=new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek=days[today.getDay()];

  const [state, dispatch] = useReducer(reducer, initialOrderState);
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
        <h3>Logistics Operation Hub</h3>
        <h3>{dayOfWeek} {timeNow}</h3>
      </header>
      <main>
        <section className='order-details'>
          <h1>{state.orderId}</h1>
           <h2>Status:{state.status}</h2>
        </section>
        <section className='user-details'>
         <h2>Customer: {state.customer}</h2>
         <h2>Destination: {state.destination}</h2>
         <h2>Location: {state.location}</h2>
        </section>
        <section className='next-actions flex gap-4 mt-6'>
          {state.button.map((btnName) => (
            <button 
              key={btnName} 
              onClick={() => dispatch({ type: 'STATUS_CHANGE', payload: btnName })}
              className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-600 transition-all"
            >
              {btnName}
            </button>
          ))}
        </section>
        {/* <NextActions></NextActions>
        <OrderDetails></OrderDetails>
        <History></History> */}
      </main>

    </>
  )
}

export default App
