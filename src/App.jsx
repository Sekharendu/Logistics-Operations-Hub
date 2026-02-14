import './App.css'
import { useReducer, useState, useEffect } from 'react';
import { initialOrderState, reducer } from './useOrderWorkflow.js'

const savedData = localStorage.getItem('fleetFlowData');

// 2. If it exists, we parse it back into an object; if not, we use the default
const persistedState = savedData ? JSON.parse(savedData) : initialOrderState;

function App() {

  const [state, dispatch] = useReducer(reducer, persistedState);
  const [theme, setTheme] = useState('light');
  const today = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = days[today.getDay()];
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());


  // const [state, dispatch] = useReducer(reducer, persistedState);
  // Fixed Timer: useEffect is the 'SDE way' to handle intervals
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNow(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stateString = JSON.stringify(state);
    localStorage.setItem('fleetFlowData', stateString);
  }, [state]); 


// Whenever the theme changes, update the 'data-theme' attribute on the <html> tag
useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);

const toggleTheme = () => {
  setTheme(prev => prev === 'light' ? 'dark' : 'light');
};
  
  // This finds the data for the order you clicked in the sidebar
  let currentState = state.orders.find((inst) => inst.id === state.activeId);

  return (
    <div className="app-container">
      <header>
        <div className="logo-area">
          <div className="brand-mark">
            <span className="brand-main">Fleet</span>
            <span className="brand-accent">Flow</span>
          </div>
          <span className="hub-title">Operations Hub</span>
        </div>
        <div className="header-info">
          <div className="theme-switch-wrapper">
            <span className="mode-label">{theme === 'light' ? 'Light' : 'Dark'}</span>
            <label className="theme-switch">
              <input 
                type="checkbox" 
                onChange={toggleTheme} 
                checked={theme === 'dark'} 
              />
              <div className="slider round">
                <span className="icon">{theme === 'light' ? '☀️' : '🌙'}</span>
              </div>
            </label>
          </div>
          
          <span className="day-tag">{dayOfWeek}</span>
          <span className="time-tag">{timeNow}</span>
        </div>
      </header>

      <main className="dashboard-layout">
        <aside className="sidebar">
          <h2>Active Shipments</h2>
          <ul>
            {state.orders.map((inst) => (
              <li 
                key={inst.id} 
                className={`sidebar-item ${state.activeId === inst.id ? 'active' : ''}`} 
                onClick={() => dispatch({ type: "SCREEN_UPDATE", payload: inst.id })}
              >
                <span className="sidebar-id">{inst.orderId}</span>
                <span className="sidebar-customer">{inst.customer}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="customer-info">
          {/* Top Card: Identity */}
          <section className="card order-header">
            <div className="order-id-group">
              <label className="field-label">ORDER ID</label>
              <h1 className="order-number">{currentState.orderId}</h1>
            </div>
            <span className={`status-badge status-${currentState.status.toLowerCase()}`}>
              {currentState.status}
            </span>
          </section>

          {/* Middle Card: Details */}
          <section className="card details-grid">
            <div className="detail-item">
              <label className="field-label">Customer</label>
              <p className="field-value">{currentState.customer}</p>
            </div>
            <div className="detail-item">
              <label className="field-label">Location</label>
              <p className="field-value">{currentState.location}</p>
            </div>
            <div className="detail-item">
              <label className="field-label">Destination</label>
              <p className="field-value">{currentState.destination}</p>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="next-actions">
            {currentState.button.map((btnName) => (
              <button 
                key={btnName} 
                className="btn"
                onClick={() => dispatch({ type: 'STATUS_CHANGE', payload: btnName })}
              >
                {btnName}
              </button>
            ))}
            <button className="btn reset-btn" onClick={() => dispatch({ type: 'RESET', payload:currentState.id})}>Reset</button>
          </section>

          {/* Bottom Card: Activity Log */}
          <section className="card history-container">
            <h3 className="section-title">Activity Log</h3>
            <div className="history-list">
              {currentState.history.map((entry, index) => (
                <div key={index} className="history-item">
                  <div className="history-time">{entry.time}</div>
                  <div className="history-note">{entry.note}</div>
                  <div className="history-type">{entry.type}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;