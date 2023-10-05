import React from 'react'

function Searchresult(props) {
const imgsrc = `https://source.unsplash.com/400x200/?${props.src}`;
  return (
    <>
        <div className='container sresult my-4'>
            <img src={imgsrc} alt='image1' />
        </div>
    </>
  )
}

export default Searchresult