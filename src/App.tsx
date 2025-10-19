// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DiwaliEnvelope from './components/DiwaliEnvelope'

export const App = () => {
  return (
    <Routes>DiwaliEnvelope
      <Route path="/" element={<DiwaliEnvelope />} />
    </Routes>
  )
}
