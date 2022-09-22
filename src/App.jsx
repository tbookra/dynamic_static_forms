import './App.css';
import DinamicForm from './pages/dinamic-form/DinamicForm';
import StaticForm from './pages/static-form/StaticForm';

function App() {
  return (
    <div className="App">
      <div className="leftSide">
        <div className="wrapper">
        <DinamicForm  />
        </div>
      </div>
      <div className="rightSide">
      <div className="wrapper">
      <StaticForm  />
          </div>
      </div>
     
      
    </div>
  );
}

export default App;
