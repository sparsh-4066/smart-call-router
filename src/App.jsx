import { useState } from "react"
import Temp from "./components/Temp"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import "./App.css"

function App() {
  const [totalCalls, setTotalCalls] = useState(0)
  const [connectedCalls, setConnectedCalls] = useState(0)
  const [rejectedCalls, setRejectedCalls] = useState(0)

  const simulateConnected = () => {
    setTotalCalls(totalCalls + 1)
    setConnectedCalls(connectedCalls + 1)
  }

  const simulateRejected = () => {
    setTotalCalls(totalCalls + 1)
    setRejectedCalls(rejectedCalls + 1)
  }

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="content">
          <h1 className="title">Dashboard Overview</h1>

          <div className="card-container">
            <Temp title="Total Calls" value={totalCalls} />
            <Temp title="Connected Calls" value={connectedCalls} />
            <Temp title="Rejected Calls" value={rejectedCalls} />
          </div>

          <div className="button-group">
            <button className="green" onClick={simulateConnected}>
              Simulate Connected Call
            </button>

            <button className="red" onClick={simulateRejected}>
              Simulate Rejected Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App