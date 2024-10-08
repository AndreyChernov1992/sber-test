import { Routes, Route, Navigate } from 'react-router'
import Layout from '~/pages/Layout'
import Main from '~/pages/Main/Main'
import Items from '~/pages/Items/Items'
import Project from '~/pages/Project/Project'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Main />}>
          <Route index element={<Items />} />
        </Route>
        <Route path="project/:id" element={<Project />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
