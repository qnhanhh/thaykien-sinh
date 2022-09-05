import Countdown from 'react-countdown'
import './Registration.css'
import RegisterForm from './RegisterForm'

const Registration = () => {
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className='timer'>
                <div className='timer-div'>
                    <span className='timer-count'>{days}</span>
                    <h3 className='timer-title'>Days</h3>
                </div>
                <div className='timer-div'>
                    <span className='timer-count'>{hours}</span>
                    <h3 className='timer-title'>Hours</h3>
                </div>
                <div className='timer-div'>
                    <span className='timer-count'>{minutes}</span>
                    <h3 className='timer-title'>Min</h3>
                </div>
                <div className='timer-div'>
                    <span className='timer-count'>{seconds}</span>
                    <h3 className='timer-title'>Sec</h3>
                </div>
            </div>
        )
    }

    return (
        <div className='regist-container'>
            <div id='registration'></div>
            <div className='regist-desc'>
                <h3 className='regist-title'>đăng ký tư vấn <br /> khóa học</h3>
                <h3 className='regist-subtitle'>full khóa luyện thi THPTQG môn SINH - học tới lúc thi</h3>
                <ul className='regist-list'>
                    <li className='regist-item'>Lộ trình học tập đi từ ĐƠN GIẢN, NGẮN GỌN, DỄ NHỚ đến <br /> HIỂU SÂU &amp; LUYỆN KỸ với tiêu chí "NẮM CHẮC 8+".</li>
                    <li className='regist-item'>Rèn luyện kỹ năng xử lý nhanh, phân bổ thời gian hiệu quả.</li>
                    <li className='regist-item'>Chiến lược tăng tốc, bứt phá 8, 9 điểm.</li>
                </ul>
                <div className='regist-noti'>
                    <Countdown date={Date.now() + 50000} renderer={renderer} />
                    <div className='price'>
                        <h3 className='old-price'>5.000.000</h3>
                        <h3 className='new-price'>2.500.000</h3>
                    </div>
                </div>
            </div>
            <RegisterForm />
        </div>
    )
}

export default Registration