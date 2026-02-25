import { useState } from 'react';
import './NewDispatchButton.css'
// import { initialOrderState } from './useOrderWorkflow.js'

function NewDispatchButton({ dispatch, state }) {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    customer_name: '',
    location: '',
    destination: ''
  });

  // Generate random orderID in format #ORD-1234
  function generateOrderId() {
    const timestamp = Date.now().toString().slice(-4);
    const randomPart = Math.floor(100 + Math.random() * 900);
    return `#ORD-${timestamp}${randomPart}`;
  }

  function submitForm(e) {
    e.preventDefault();
    
    // Logic to find the next numeric ID
    const lastElement = state.orders.at(-1);
    const lastElementId = lastElement.id;

    const newOrder = {
      id: lastElementId + 1,
      orderId: generateOrderId(),
      customer: userData.customer_name,
      location: userData.location,
      destination: userData.destination,
      status: "PENDING",
      button: ['DISPATCHED', 'CANCELLED'],
      history: [{ time: new Date().toLocaleTimeString(), note: "New order created", type: "SYSTEM" }]
    };

    dispatch({
      type: "ADD_ORDER",
      payload: newOrder
    });

    // Close and reset
    setFormIsOpen(false);
    setUserData({ customer_name: '', location: '', destination: '' });
  }

  function handleChange(e) {
    const targetAttribute = e.target.name;
    const targetAttributeValue = e.target.value;
    setUserData({
      ...userData,
      [targetAttribute]: targetAttributeValue
    });
  }

  return (
    <>
      <button onClick={() => { setFormIsOpen(prev => !prev); }} >
        + New Dispatch
      </button>

      <form className={formIsOpen ? "formOpened" : "formClosed"} onSubmit={submitForm}>
        <div className="form_container">
          <h3>Dispatch New Order</h3>
          <input 
            name="customer_name" 
            placeholder="Customer Name" 
            value={userData.customer_name} 
            onChange={handleChange} 
            required 
          />
          <input 
            name="location" 
            placeholder="Pickup Location" 
            value={userData.location} 
            onChange={handleChange} 
            required 
          />
          <input 
            name="destination" 
            placeholder="Destination" 
            value={userData.destination} 
            onChange={handleChange} 
            required 
          />

          <div className="form_actions">
            <button type="button" onClick={() => setFormIsOpen(false)}>Cancel</button>
            <button type="submit">Save Order</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default NewDispatchButton;