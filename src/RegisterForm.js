import './RegisterForm.css'

const RegisterForm = () => {
    function HandleSubmit(event) {
        const submitForm=document.getElementById('form1')
        const submitBtn = document.querySelector('#submitBtn')
        submitBtn.classList.add('processing')
        submitForm.submit()

        const restartBtn = document.querySelector('.restart')
        setTimeout(() => {
            restartBtn.style.display = 'block'
        }, 4000)
        restartBtn.addEventListener('click', e => {
            submitBtn.classList.remove('processing')
            e.preventDefault()
            restartBtn.style.display = 'none'
        })
    }

    return (
        <div className='register-form'>
            <h3 className='register-title'>Em để lại thông tin để thầy tư vấn cụ thể nội dung khóa học nhé!</h3>
            <iframe name='hiddenConfirm' id='hiddenConfirm'></iframe>
            <form target='hiddenConfirm' id='form1' action='' method='post'>
                <input type='text' placeholder='Họ tên'></input><br />
                <input type='email' placeholder='Email'></input><br />
                <input type='text' placeholder='Số điện thoại'></input><br />
                <input type='text' placeholder='Địa chỉ'></input><br />
                <input type='text' placeholder='Link Facebook'></input><br />
                <div className='register-box'>
                    <input type='checkbox' id='Full Khóa Học' name='Full Khóa Học'></input>
                    <label htmlFor='Full Khóa Học'>Full Khóa Học</label><br />
                    <input type='checkbox' id='Khóa Chuyên Đề' name='Khóa Chuyên Đề'></input>
                    <label htmlFor='Khóa Chuyên Đề'>Khóa Chuyên Đề</label><br />
                    <input type='checkbox' id='Khóa Luyện Đề' name='Khóa Luyện Đề'></input>
                    <label htmlFor='Khóa Luyện Đề'>Khóa Luyện Đề</label><br />
                    <input type='checkbox' id='Khóa Tổng Ôn Thực Chiến' name='Khóa Tổng Ôn Thực Chiến'></input>
                    <label htmlFor='Khóa Tổng Ôn Thực Chiến'>Khóa Tổng Ôn Thực Chiến</label><br />
                    <input type='checkbox' id='Bộ Sách Phác Đồ Sinh' name='Bộ Sách Phác Đồ Sinh'></input>
                    <label htmlFor='Bộ Sách Phác Đồ Sinh'>Bộ Sách Phác Đồ Sinh</label><br />
                </div>
                <button className='button' id='submitBtn' onClick={(event) => HandleSubmit(event)}>
                    <span>Submit</span>
                    <svg viewBox="0 0 15 13">
                        <polyline points="2 6.5 6 10.5 13 2.5"></polyline>
                    </svg>
                </button>

                <a href="/" className="restart">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M4.5,4.5c1.9-1.9,5.1-1.9,7,0c0.7,0.7,1.2,1.7,1.4,2.7l2-0.3C14.7,5.4,14,4.1,13,3.1c-2.7-2.7-7.1-2.7-9.9,0 L0.9,0.9L0.2,7.3l6.4-0.7L4.5,4.5z"></path>
                        <path d="M15.8,8.7L9.4,9.4l2.1,2.1c-1.9,1.9-5.1,1.9-7,0c-0.7-0.7-1.2-1.7-1.4-2.7l-2,0.3 C1.3,10.6,2,11.9,3,12.9c1.4,1.4,3.1,2,4.9,2c1.8,0,3.6-0.7,4.9-2l2.2,2.2L15.8,8.7z"></path>
                    </svg>
                    Restart
                </a>
            </form>
        </div>
    )
}

export default RegisterForm