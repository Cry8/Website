import * as React from 'react'
import Stack from './Stack'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './admin/contexts/useAuth'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Stack />
      </AuthProvider>
    </BrowserRouter>
  )
}
