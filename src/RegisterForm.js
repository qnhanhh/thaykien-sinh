import './RegisterForm.css'

const RegisterForm = () => {
    function HandleSubmit(event) {
        event.preventDefault()
        const title = 'Úiii'
        const message = 'Hãy điền số điện thoại và link Facebook trước khi gửi nha'
        const duration = 3000
        const main = document.querySelector('.register-form');

        const submitBtn = document.querySelector('#submitBtn')
        let isValid = false
        const submitForm = document.getElementById('form1')
        const inputs = document.querySelectorAll('input[required]')
        inputs.forEach(item => {
            if (!item.value) {
                isValid = false
                const toast = document.createElement('div');

                const delay = (duration / 1000).toFixed(2);

                toast.classList.add('toast');
                toast.style.animation = `slideRtoL ease .3s, fadeOut linear 1s ${delay}s forwards`;
                toast.innerHTML = `
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                `;
                main.appendChild(toast);
            } else {
                isValid = true
            }
        })
        if (isValid) {
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
                submitForm.reset()
            })
        }
    }

    return (
        <div className='register-form'>
            <h3 className='register-title'>Em để lại thông tin để thầy tư vấn cụ thể nội dung khóa học nhé!</h3>
            <iframe name='hiddenConfirm' id='hiddenConfirm'></iframe>
            <form target='hiddenConfirm' id='form1' action='https://docs.google.com/forms/d/e/1FAIpQLSelVplKesQOZ0qHvCoK6ss-izBItW4LWLgLuxwM2VMaN3GttA/formResponse' method='post'>
                <input name='entry.1647948063' type='text' placeholder='Họ tên' /><br />
                <input name='entry.268604474' type='email' placeholder='Email' /><br />
                <input name='entry.1718464397' type='text' placeholder='Số điện thoại' required /><br />
                <input name='entry.539794579' type='text' placeholder='Địa chỉ'></input><br />
                <input name='entry.195125974' type='text' placeholder='Link Facebook' required /><br />
                <div className='register-box'>
                    <input name='entry.657393504' type='checkbox' value='Full Khóa Học' id='Full Khóa Học'></input>
                    <label htmlFor='Full Khóa Học'>Full Khóa Học</label><br />
                    <input name='entry.998344326' type='checkbox' value='Khóa Chuyên Đề' id='Khóa Chuyên Đề'></input>
                    <label htmlFor='Khóa Chuyên Đề'>Khóa Chuyên Đề</label><br />
                    <input name='entry.1110302314' type='checkbox' value='Khóa Luyện Đề' id='Khóa Luyện Đề'></input>
                    <label htmlFor='Khóa Luyện Đề'>Khóa Luyện Đề</label><br />
                    <input name='entry.1993947337' type='checkbox' value='Khóa Tổng Ôn Thực Chiến' id='Khóa Tổng Ôn Thực Chiến'></input>
                    <label htmlFor='Khóa Tổng Ôn Thực Chiến'>Khóa Tổng Ôn Thực Chiến</label><br />
                    <input name='entry.992199181' type='checkbox' value='Bộ Sách Phác Đồ Sinh' id='Bộ Sách Phác Đồ Sinh'></input>
                    <label htmlFor='Bộ Sách Phác Đồ Sinh'>Bộ Sách Phác Đồ Sinh</label><br />
                </div>
                <button className='button' id='submitBtn' onClick={(event) => HandleSubmit(event)}>
                    <span>Gửi thông tin</span>
                    <svg viewBox="0 0 15 13">
                        <polyline points="2 6.5 6 10.5 13 2.5"></polyline>
                    </svg>
                </button>

                <a href="/" className="restart">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M4.5,4.5c1.9-1.9,5.1-1.9,7,0c0.7,0.7,1.2,1.7,1.4,2.7l2-0.3C14.7,5.4,14,4.1,13,3.1c-2.7-2.7-7.1-2.7-9.9,0 L0.9,0.9L0.2,7.3l6.4-0.7L4.5,4.5z"></path>
                        <path d="M15.8,8.7L9.4,9.4l2.1,2.1c-1.9,1.9-5.1,1.9-7,0c-0.7-0.7-1.2-1.7-1.4-2.7l-2,0.3 C1.3,10.6,2,11.9,3,12.9c1.4,1.4,3.1,2,4.9,2c1.8,0,3.6-0.7,4.9-2l2.2,2.2L15.8,8.7z"></path>
                    </svg>
                    Gửi lại thông tin
                </a>
            </form>
        </div>
    )
}

export default RegisterForm