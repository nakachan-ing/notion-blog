import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1>共通のコンポーネントです。</h1>
        {children}
    </div>
  )
}

export default Layout