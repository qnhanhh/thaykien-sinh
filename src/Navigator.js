import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { getMentors } from './data/mentors'
import './Navigator.css'

const Navigator = () => {
    function handleClick() {
        const navBars = document.getElementById('nav-bars')
        navBars.classList.toggle('change')

        const navItems = document.querySelectorAll('.nav-item')
        function navAnimation(direct1, direct2) {
            navItems.forEach((item, index) => {
                item.classList.replace(`slide-${direct1}-${index + 1}`, `slide-${direct2}-${index + 1}`)
            })
        }

        const navContainer = document.getElementById('nav-container')
        navContainer.classList.toggle('nav-active')
        if (navContainer.classList.contains('nav-active')) {
            navContainer.classList.replace('nav-slide-left', 'nav-slide-right')
            navAnimation('out', 'in')
        } else {
            navContainer.classList.replace('nav-slide-right', 'nav-slide-left')
            navAnimation('in', 'out')
        }
    }

    function handleMentorClick() {
        const mentorBtn = document.querySelector('.mentor-container')
        mentorBtn.classList.toggle('mentor-active')
        if (mentorBtn.classList.contains('mentor-active')) {
            mentorBtn.classList.replace('slide-up', 'slide-down')
        } else {
            mentorBtn.classList.replace('slide-down', 'slide-up')
        }
    }

    let mentors = getMentors()

    return (
        <Fragment>
            <div className="mentor-container slide-up" id="mentor-container">
                <nav className='mentor-div'>
                    <ul className='mentor-list'>
                        {mentors.map((item, index) => {
                            return (
                                <li key={index} className="mentor-item">
                                    <a className='mentor-link' href={item.href}>
                                        <img alt='' src={item.source} className='mentor-photo'></img>
                                        <h3 className='mentor-name'>{item.name}</h3>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="mentor-icon" id="mentor-icon" onClick={handleMentorClick}>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                <span>Teacher</span>
            </div>

            <div className="nav-container nav-slide-left" id="nav-container">
                <nav className='nav-div'>
                    <ul className='nav-list'>
                        <li className="nav-item slide-out-1"><a className='nav-link' href="/">Home</a></li>
                        <li className="nav-item slide-out-2"><a className='nav-link' href="/">What</a></li>
                        <li className="nav-item slide-out-3"><a className='nav-link' href="/">Why</a></li>
                        <li className="nav-item slide-out-4"><a className='nav-link' href="/">How</a></li>
                        <li className="nav-item slide-out-5"><a className='nav-link' href="/">Who</a></li>
                        <li className="nav-item slide-out-6"><a className='nav-link' href="/">Why not</a></li>
                        <li className="nav-item slide-out-7"><a className='nav-link' href="/">How much</a></li>
                    </ul>
                </nav>
            </div>
            <div className="nav-bars" id="nav-bars" onClick={handleClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </Fragment>
    )
}

export default Navigator