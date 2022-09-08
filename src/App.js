import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import Banner from './Banner';
import Explanation from './Explanation';
import Registration from './Registration';
import Pathway from './Pathway';
import Teacher from './Teacher';
import Achievement from './Achievement';
import Tuition from './Tuition';
import Navigator from './Navigator';
import './Responsive.css';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)
    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10
    }
  }

  return (
    <div className="App">
      <motion.div
        className='cursor'
        variants={variants}
        animate='default'
        transition={{ type: "spring", stiffness: 100, mass: 0.1 }}></motion.div>
      <Navigator />
      <Banner />
      <Registration />
      <Explanation />
      <Pathway />
      <Teacher />
      <Achievement />
      <Tuition />
    </div>
  );
}

export default App;
