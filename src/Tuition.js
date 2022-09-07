import './Tuition.css'

const Tuition = () => {
    return (
        <div className='tuition-container' id='tuition'>
            <h3 className='regist-title'>học phí &amp; ưu đãi</h3>
            <ul className='tuition-list'>
                <li className='tuition-item'>
                    <h3 className='tuition-title'>550.000đ</h3>
                    <h6 className='tuition-subtitle'>combo tập 1-2 <br />phác đồ sinh</h6>
                    <ul className='tuition-details'>
                        <li className='tuition-detail'>Phác Đồ Sinh Lý Thuyết dày 328 trang</li>
                        <li className='tuition-detail'>Phác Đồ Sinh Bài Tập dày 312 trang</li>
                        <li className='tuition-detail'>Từ cơ bản đến nâng cao</li>
                    </ul>
                    <a className='tuition-link' href='#registration'>Đăng ký ngay</a>
                </li>
                <li className='tuition-item'>
                    <h3 className='tuition-title'>2.500.000đ</h3>
                    <h6 className='tuition-subtitle'>full khóa</h6>
                    <ul className='tuition-details'>
                        <li className='tuition-detail'>Live xuất phát sớm</li>
                        <li className='tuition-detail'>Live chuyên đề</li>
                        <li className='tuition-detail'>Live luyện đề</li>
                        <li className='tuition-detail'>Live về đích</li>
                    </ul>
                    <a className='tuition-link' href='#registration'>Đăng ký ngay</a>
                </li>
                <li className='tuition-item'>
                    <h3 className='tuition-title'>1.250.000đ</h3>
                    <h6 className='tuition-subtitle'>coming soon</h6>
                    <ul className='tuition-details'>
                        <li className='tuition-detail'>Bộ sách phác đồ sinh 5 quyển</li>
                    </ul>
                    <a className='tuition-link' href='#registration'>Đăng ký ngay</a>
                </li>
            </ul>
        </div>
    )
}

export default Tuition