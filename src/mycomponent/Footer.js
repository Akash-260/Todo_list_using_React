import React from 'react'

export const Footer = () => {
  let footerstyle = {
    position: "absolute",
    // bottom: '30px',
    width: "100%"
  }

  return (
    <footer style={footerstyle} className='bg-dark text-light py-3'>
      <p className='text-center'>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
