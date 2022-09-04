import './RegisterForm.css'

const RegisterForm = () => {
    return (
        <div className='register-form'>
            <h3 className='register-title'>Em để lại thông tin để thầy tư vấn cụ thể nội dung khóa học nhé!</h3>
            <form id='form1' action='' method='post'>
                <input type='text' placeholder='Họ tên'></input><br />
                <input type='email' placeholder='Email'></input><br />
                <input type='text' placeholder='Số điện thoại'></input><br />
                <input type='text' placeholder='Địa chỉ'></input><br />
                <input type='text' placeholder='Link Facebook'></input><br />
                <div className='register-box'>
                    <input type='checkbox' id='Full Khóa Học' name='Full Khóa Học'></input>
                    <label for='Full Khóa Học'>Full Khóa Học</label><br />
                    <input type='checkbox' id='Khóa Chuyên Đề' name='Khóa Chuyên Đề'></input>
                    <label for='Khóa Chuyên Đề'>Khóa Chuyên Đề</label><br />
                    <input type='checkbox' id='Khóa Luyện Đề' name='Khóa Luyện Đề'></input>
                    <label for='Khóa Luyện Đề'>Khóa Luyện Đề</label><br />
                    <input type='checkbox' id='Khóa Tổng Ôn Thực Chiến' name='Khóa Tổng Ôn Thực Chiến'></input>
                    <label for='Khóa Tổng Ôn Thực Chiến'>Khóa Tổng Ôn Thực Chiến</label><br />
                    <input type='checkbox' id='Bộ Sách Phác Đồ Sinh' name='Bộ Sách Phác Đồ Sinh'></input>
                    <label for='Bộ Sách Phác Đồ Sinh'>Bộ Sách Phác Đồ Sinh</label><br />
                </div>
                <input className='register-submit hvr-bounce-out' type='submit' value='GỬI THÔNG TIN'></input>
            </form>
        </div>
    )
}

export default RegisterForm