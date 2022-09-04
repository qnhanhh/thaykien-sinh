import './App.css';
import Banner from './Banner';
import Explanation from './Explanation';
import Registration from './Registration';
import Pathway from './Pathway';
import Teacher from './Teacher';
import Achievement from './Achievement';
import Tuition from './Tuition';
import './Responsive.css';

function App() {
  return (
    <div className="App">
        <Banner />
        <Registration />
        <Explanation />
        <Pathway />
        <Teacher />
        <Achievement/>
        <Tuition/>
    </div>
  );
}

export default App;
