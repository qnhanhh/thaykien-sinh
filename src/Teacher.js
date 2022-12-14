import {motion} from 'framer-motion'
import './Teacher.css'

const Teacher = () => {
    return (
        <div className='teacher-container' id='teacher'>
            <div className='teacher-wrapper'>
                <div className='teacher-photo'></div>
                <div className='teacher-desc'>
                    <h1 className='explain-title'>đôi nét về thầy<br /> trương công kiên</h1>
                    <p className='teacher-text'>- Giáo Viên trẻ với phong cách hiện đại , thấu hiểu tâm lý học sinh, tạo động lực và truyền cảm hứng cho học sinh.</p>
                    <p className='teacher-text'>- Nhiều năm liền giúp đỡ hàng ngàn học sinh đỗ vào các trường Y Dược top đầu.</p>
                    <div className='teacher-statistic'>
                        <img src='' alt=''></img>
                        <img src='' alt=''></img>
                    </div>
                    <div className='teacher-statistic'>
                        <img src='' alt=''></img>
                        <img src='' alt=''></img>
                    </div>
                </div>
            </div>
            <div className="banner-register center-btn">
                <motion.a animate={{scale:[1,1.2,1]}} transition={{repeat:Infinity, duration:2}} className='banner-link' href='#registration'>Đăng ký ngay</motion.a>
            </div>
        </div>
    )
}

export default Teacher