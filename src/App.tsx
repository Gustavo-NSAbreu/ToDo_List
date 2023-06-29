// import styles from './App.module.css';
import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import './global.css';

function App() {
  return ( 
    <div className="App">
      <Header />
      <TaskCreator />
    </div>
  )
}

export default App;
