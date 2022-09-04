import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className='banner-background'>
                <div className="banner-logo"></div>
                <div className="banner-body">
                    <div className="banner-text">
                        <h3 className='banner-title'>Sinh học - thầy trương công kiên</h3>
                        <h3 className='banner-subtitle'>2k5 xuất phát sớm<br /> nhân đôi cơ hội <br /> đỗ trường top</h3>
                        <div className='banner-list'>
                            <h3>ôn kiến thức lớp 11</h3>
                            <h3>học sớm kiến thức lớp 12</h3>
                            <h3>tạo đà bứt phá kỳ thi thptqg 2023</h3>
                        </div>
                    </div>
                    <div className="banner-photo">
                        <img src='https://w.ladicdn.com/s1150x850/6121eaeb1b6cbb00134b5e8d/thay-kien-20220311082544.png' alt=''></img>
                    </div>
                </div>
                <div className="banner-register">
                    <a className='banner-link hvr-bounce-out' target='blank' href='https://www.facebook.com/HocSinhThayTruongCongKien'>Xem ngay</a>
                </div>
            </div>
        </div>
    )
}

export default Banner