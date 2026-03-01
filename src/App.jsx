import { useState } from "react"
import Temp from "./components/Temp"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import "./App.css"

function App() {
  const [totalCalls, setTotalCalls] = useState(0)
  const [connectedCalls, setConnectedCalls] = useState(0)
  const [rejectedCalls, setRejectedCalls] = useState(0)
  const [callHistory, setCallHistory] = useState([])

  const simulateConnected = () => {
  const newCall = {
    number: "+91-98" + Math.floor(Math.random() * 100000000),
    status: "Connected",
    time: new Date().toLocaleTimeString(),
    duration: Math.floor(Math.random() * 300) + " sec"
  }

  setTotalCalls(totalCalls + 1)
  setConnectedCalls(connectedCalls + 1)
  setCallHistory([newCall, ...callHistory])
}

const simulateRejected = () => {
  const newCall = {
    number: "+91-98" + Math.floor(Math.random() * 100000000),
    status: "Rejected",
    time: new Date().toLocaleTimeString(),
    duration: "0 sec"
  }

  setTotalCalls(totalCalls + 1)
  setRejectedCalls(rejectedCalls + 1)
  setCallHistory([newCall, ...callHistory])
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

         <h2 style={{ marginTop: "40px" }}>Recent Calls</h2>

<table className="call-table">
  <thead>
    <tr>
      <th>Caller</th>
      <th>Status</th>
      <th>Time</th>
      <th>Duration</th>
    </tr>
  </thead>
  <tbody>
    {callHistory.map((call, index) => (
      <tr key={index}>
        <td>{call.number}</td>
        <td>{call.status}</td>
        <td>{call.time}</td>
        <td>{call.duration}</td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </div>
  )
}

export default App