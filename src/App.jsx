import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './component/Signup'
import Login from './component/Login'
import ForgotPassword from './component/ForgotPassword'
import TimeKeeping from './component/TimeKeeping'
import axios from 'axios'
import Information from './component/Information'
import TimeSheet from './pages/TimeSheets/TimeSheet'
import Staff from './component/Staff/Staff'
import Home from './component/Home/Home'
import ConfirmStaff from './component/ConfirmStaff/ConfirmStaff'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/forgot-password"} element={<ForgotPassword />} />
        <Route path={"/timekeeping"} element={<TimeKeeping />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/information"} element={<Information />} />
        <Route path={"/time-sheets"} element={<TimeSheet />} />
        <Route path={"/staff"} element={<Staff />} />
        <Route path={"/confirm-staff"} element={<ConfirmStaff />} />
      </Routes>
    </Router>
  )
}

export default App
