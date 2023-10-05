import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <>
    <div className="d-flex flex-column h-100">
      <footer className="footer mt-auto py-3 bg-light">
        <div className='container' style={{textAlign:"center"}}>
        Copyright © {year}
        </div>
      </footer>
      </div>
    </>
  )
}

export default Footer
