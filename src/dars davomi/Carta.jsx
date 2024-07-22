import './Carta.css'
import React from 'react'
import { BiSolidHeartCircle } from "react-icons/bi";
import { TbShoppingCartFilled } from "react-icons/tb";
function Carta() {
  return (
    <>
    <div className="contacarta">
        
        <div className="img">
            <img src="https://goodzone.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flittel-banner.7f5a007a.png&w=384&q=75" alt="" />
        </div>
        <div className='minicontac'>
<div className="savat101">
<BiSolidHeartCircle  className='heartme'/>
<img src="https://cdn.goodzone.uz/goodzone/dd4a3941-dc1d-4382-831d-a63dc031649d.png" alt="" className='img2'/>
<button className='nickname'>Мясорубка</button>
<p className="textall">
Дополняют это камера с ультрашироким объективом на 8 МП и макро-камера на 2 МП, расширяя возможности фотосъемки.
</p>
<div className="ter">
    <h1 className='katta'>1 326 000 сум</h1>
    <h3 className="kichik">от <span>165 750 сум</span></h3>
</div>
<button className="uy">
<TbShoppingCartFilled className='basket' />
</button>
</div>
    </div> 
    <div className='minicontac'>
<div className="savat101">
<BiSolidHeartCircle  className='heartme'/>
<img src="https://cdn.goodzone.uz/goodzone/477f0aab-5ddf-4ea9-ab76-5886439ab0a8.png" alt="" className='img2'/>
<button className='nickname'>Электрический</button>
<p className="textall">
Дополняют это камера с ультрашироким объективом на 8 МП и макро-камера на 2 МП, расширяя возможности фотосъемки.
</p>
<div className="ter">
    <h1 className='katta'>625 600 сум</h1>
    <h3 className="kichik">от <span>78 200 сум</span></h3>
</div>
<button className="uy">
<TbShoppingCartFilled className='basket' />
</button>
</div>
    </div> 
    <div className='minicontac'>
<div className="savat101">
<BiSolidHeartCircle  className='heartme'/>
<img src="https://cdn.goodzone.uz/goodzone/18abd5cf-98e1-4c14-a75f-942fdf98c793.png" alt="" className='img2'/>
<button className='nickname'>Электрический</button>
<p className="textall">
Дополняют это камера с ультрашироким объективом на 8 МП и макро-камера на 2 МП, расширяя возможности фотосъемки.
</p>
<div className="ter">
    <h1 className='katta'>625 600 сум</h1>
    <h3 className="kichik">от <span>78 200 сум</span></h3>
</div>
<button className="uy">
<TbShoppingCartFilled className='basket' />
</button>
</div>
    </div> 
    </div>
    </>
  )
}

export default Carta