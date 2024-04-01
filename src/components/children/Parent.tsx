import React from 'react'

// Component inside component with TS

const Parent = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
        <h1>This is a Parent</h1>
        {children}
    </div>
  )
}

export default Parent