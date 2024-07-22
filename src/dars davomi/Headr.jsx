import "./Header.css"
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { BsSearchHeartFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
function Headr() {
    return(
     <div className="headr">
        <div className="headerlogo">
<img src="data:image/png;base64,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+jz/Enbldtzh3Pl1q7+VC9eetLijX7f5a4EjraaGNz7cPL+ZwDRfeHrefqhxT7tfN3h5OjazId1AygiSxMaPthmA1Q70BH/RwcwSHR+ET/CLCQ0S+VjC9NTzEvya4I92YuvwlG5DA2hqYzfQffAoscZRpYYfdr//nwC2l9lGxuI8ZkYo4iy0mRBe7CepSHKWeHYihGBhwgIj80LLSKzQg99ExkRuxS0jMQRr4UtIX4hE+KnR8gLTSkI7M9IssQIvDur1yLjcmz+ihdnXjv/mMcs7MitsxQKO69Q7ZlZ2XLfU2D/a5tHKmGqliZUlHS/JRRxmnnX00reWEWYiW19ZkF19MxdG0OrlrbhjeG9ms6VafmgJdsyEmtbGm8u4+TNamH0UnY6fXFM1EB5LLStnumfF4VXkpmrluW3mXmhefcsTKctTBpf6zPcty/NyZoZZeBRHvCLHdgibxX507LgT5mtTzYVldHoGy4+hVRfDnBl3+Wn/R/7RFKxj0xd+x3sDP2HiKNSWyGCGXnxsqXaMO+M34zfvGKKYjB07RifzhKHGKqx8+pZlVxBzjYPc8hNjHWK7tGmqXhp6IrsGeTMJn99864N74fq7sUXC4sxD50rTBK4eIvZz3zQSE1yKmcJOPMtnsMxB1mLwmO3lmZ7ii/o0F4lpBLGAFfHMwLfC2DITkUJTEVh2y0gNG76ltv++ht/8u/8xIwiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiC+Hf5H7aRx7nl0FHmAAAAAElFTkSuQmCC++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++" alt="" />
        </div>
        <div className="header2w">
            <p>Скидки</p>
            <p>Магазин</p>
        </div>
        <div className="headerbottom"></div>
        <div className="headrbottom">
            <button className="category">
                Категории
            </button>
            <div className="inp">
            <input type="text" placeholder="Search" className="input"/>
            <button className="icon1"><BsSearchHeartFill /></button>
            </div>
           
            <div className="icon">
            <FaRegHeart />
            <SlBasket  className="basket"/>
            </div>
            
        </div>
     </div>
        
    )
}
export default Headr
