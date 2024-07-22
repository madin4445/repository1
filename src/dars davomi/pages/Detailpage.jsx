import React from 'react'
import "./Detailpage.css"
function Card1 () {
  return(
<> 
<div className="contadetail">
<div className="famouse">
  <div className="left">
    <h1>Smartphone and gadget</h1>
    <div className='span2'>
      <span>Smartphone</span> <br />
      <span>Telephone</span>
    </div>
    <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpopular-card-1.483e4807.png&w=256&q=75" alt="" className='rasm'/>
  </div>
</div>
</div>

</>
  )
}
function Detailpage() {
  return (
   <div className="contaitem">
    <div className='famous-container'>
      <Card1 gap={"1/3"} />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 />
      <Card1 gap={"3/5"} />
     <div/>
    
  </div>
  </div>
  )
}

export default Detailpage
