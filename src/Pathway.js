import {motion} from 'framer-motion'
import './Pathway.css'

const Pathway = () => {
    return (
        <div className='pathway-container'>
            <h1 className='explain-title'>lộ trình ôn thi thptqg môn sinh học</h1>
            <h6 className='explain-subtitle'>ôn sớm - luyện sâu - bứt phá 9+</h6>
            <div className='pathway-desc'>
            </div>
            <div className="banner-register center-btn">
                <motion.a animate={{scale:[1,1.2,1]}} transition={{repeat:Infinity, duration:2}} className='banner-link' href='#registration'>Đăng ký ngay</motion.a>
            </div>
        </div>
    )
}

export default Pathway