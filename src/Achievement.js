import './Achievement.css'

const Achievement = () => {
    return (
        <div className='achievement-container'>
            <h1 className='explain-title'>thành tích học sinh</h1>
            <p className='achievement-text'>Thầy Trương Công Kiên tới tận nơi trao quà <br /> cho học sinh đạt thành tích xuất sắc trong kỳ thi THPTQG</p>
            <ul className='achievement-list'>
                <li className='achievement-item'>
                    <div className='achievement-img img-1'></div>
                    <h6 className='achievement-title'>Nguyễn Khánh Duy <br /> Á Khoa Toàn Quốc 2020</h6>
                    <p className='achievement-desc'>Học trò thầy Kiên - Nguyễn Khánh Duy - Tiền Giang - Á Khoa Toàn Quốc 2020 - hiện đang là SV Y Khoa của ĐH Y Dược HCM</p>
                </li>
                <li className='achievement-item'>
                    <div className='achievement-img img-2'></div>
                    <h6 className='achievement-title'>Duy - 10Đ Sinh và Đỗ Y Khoa ĐH Y <br /> Dược HCM - khóa 2k2</h6>
                    <p className='achievement-desc'>Thầy Kiên vượt hơn 1700Km về tận nhà bạn học trò Duy có hoàn cảnh khó khăn - Bến Tre - 10Đ Sinh và Đỗ Y Khoa ĐH Y Dược HCM - khóa 2k2</p>
                </li>
                <li className='achievement-item'>
                    <div className='achievement-img img-3'></div>
                    <h6 className='achievement-title'>Vinh Danh &amp; Tặng Quà <br /> Học Sinh Đạt Điểm Cao</h6>
                    <p className='achievement-desc'>Năm 2021, số học sinh 2K3 đạt điểm 10 môn Sinh: 33 em, và hơn 200 em điểm từ 9 trở lên</p>
                </li>
            </ul>
        </div>
    )
}

export default Achievement