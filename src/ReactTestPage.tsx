import React, { useState } from 'react'

function ReactTestPage() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('Hello from React!')

    return (
        <div className="wrap">
            <header>
                <h1>React Test Page</h1>
                <p className="muted">Testing React functionality and routing</p>
            </header>

            <div className="test-section">
                <h2>Counter Test</h2>
                <div className="counter-display">
                    <p>Count: <strong>{count}</strong></p>
                    <div className="button-group">
                        <button 
                            className="btn btn-primary"
                            onClick={() => setCount(count + 1)}
                        >
                            Increment
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => setCount(count - 1)}
                        >
                            Decrement
                        </button>
                        <button 
                            className="btn btn-outline"
                            onClick={() => setCount(0)}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            <div className="test-section">
                <h2>Input Test</h2>
                <div className="input-group">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type something..."
                        className="input-field"
                    />
                    <p className="output">You typed: <em>{message}</em></p>
                </div>
            </div>

            <div className="test-section">
                <h2>Component Features</h2>
                <ul className="feature-list">
                    <li>✅ React Hooks (useState)</li>
                    <li>✅ Event Handling</li>
                    <li>✅ Controlled Components</li>
                    <li>✅ Dynamic Rendering</li>
                    <li>✅ Router Navigation</li>
                </ul>
            </div>

            <div className="navigation">
                <a href="/" className="btn btn-outline">← Back to Links</a>
            </div>
        </div>
    )
}

export default ReactTestPage
