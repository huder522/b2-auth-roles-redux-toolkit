import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminPage } from '../../pages/admin/AdminPage'
import { HomePage } from '../../pages/home/HomePage'
import { ProfessorPage } from '../../pages/professor/ProfessorPage'
import { StudentPage } from '../../pages/student/StudentPage'

export const UsersRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="admin" element={ <AdminPage /> } />
        <Route path="professor" element={ <ProfessorPage /> } />
        <Route path="student" element={ <StudentPage /> } />
        <Route path="*" element={ <Navigate to="/"/>}/>
      </Routes>
    </>
  )
}
