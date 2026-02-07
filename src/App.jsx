import './App.css'
import logo from './assets/logo.png'
import { useReducer } from 'react';
import { initialOrderState , reducer } from './useOrderWorkflow.js'
import { useState } from 'react'
function App() {

  // let timeNow=new Date().toLocaleTimeString();
  const today=new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek=days[today.getDay()];
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());

// This updates the clock every second
setInterval(() => {
  setTimeNow(new Date().toLocaleTimeString());
}, 1000);

  const [state, dispatch] = useReducer(reducer, initialOrderState);
  
  return (
    <div className="app-container">

      <header>
        <div className="logo-area">
          {/* Text-based Logo instead of Image */}
          <div className="brand-mark">
            <span className="brand-main">Fleet</span>
            <span className="brand-accent">Flow</span>
          </div>
          <span className="hub-title">Operations Hub</span>
        </div>
        <div className="header-info">
          <span className="day-tag">{dayOfWeek}</span>
          <span className="time-tag">{timeNow}</span>
        </div>
      </header>

      <main>
        {/* 2. Top Card: Order Identity & Status */}
        <section className="card order-header">
          <div className="order-id-group">
            <label className="field-label">ORDER ID</label>
            <h1 className="order-number">{state.orderId}</h1>
          </div>
          <span className={`status-badge status-${state.status.toLowerCase()}`}>
            {state.status}
          </span>        
        </section>

        {/* 3. Middle Card: User & Shipping Details */}
        <section className="card details-grid">
          <div className="detail-item">
            <label className="field-label">Customer</label>
            <p className="field-value">{state.customer}</p>
          </div>
          <div className="detail-item">
            <label className="field-label">Location</label>
            <p className="field-value">{state.location}</p>
          </div>
          <div className="detail-item">
            <label className="field-label">Destination</label>
            <p className="field-value">{state.destination}</p>
          </div>
        </section>

        {/* 4. Action Buttons (No Card for these, keep them floating) */}
        <section className="next-actions">
          {state.button.map((btnName) => (
            <button 
              key={btnName} 
              className="btn"
              onClick={() => dispatch({ type: 'STATUS_CHANGE', payload: btnName })}
            >
              {btnName}
            </button>
          ))}
        </section>

        {/* 5. Bottom Card: The Activity Log / Timeline */}
        <section className="card history-container">
          <h3 className="section-title">Activity Log</h3>
          <div className="history-list">
            {state.history.map((entry, index) => (
              <div key={index} className="history-item">
                <div className="history-time">{entry.time}</div>
                <div className="history-note">{entry.note}</div>
                <div className="history-type">{entry.type}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
