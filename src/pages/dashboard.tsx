import React, { useEffect } from 'react'
import { getTask } from '../services/authService'

function Dashboard() {
  const getTaskList = async () => {
    const response = await getTask()
    console.log(response)
  }
  useEffect(()=>{
    getTaskList()
  },[])
  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard