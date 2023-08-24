'use client'
import '../styles/globals.css'
import {AuthContextProvider} from '@/context/AuthContext'

export default function RootLayout({children}:{children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <body className='bg-gray-100'>
        <div className='relative h-screen overflow-hiddens'>
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </div>
        </body>
    </html>
  )
}