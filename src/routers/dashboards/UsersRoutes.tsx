import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../components/ui/Navbar'
import { AdminPage } from '../../pages/admin/AdminPage'
import { HomePage } from '../../pages/home/HomePage'
import { ProfessorPage } from '../../pages/professor/ProfessorPage'
import { StudentPage } from '../../pages/student/StudentPage'
import { RequireRoles } from '../protected/RequireRoles'

export const UsersRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          
          <Route path="/" element={ <HomePage /> } />
        
          <Route element={ <RequireRoles roles={['ADMIN_ROLE']} />} >
            <Route path="admin" element={ <AdminPage /> } />
          </Route>

          <Route element={ <RequireRoles roles={['PROFESSOR_ROLE']} />} >
            <Route path="professor" element={ <ProfessorPage /> } />
          </Route>

          <Route element={ <RequireRoles roles={['STUDENT_ROLE']} />} >
            <Route path="student" element={ <StudentPage /> } />
          </Route>

          <Route path="*" element={ <Navigate to="/"/>}/>

        </Routes>
      </div>
    </>
  )
}
