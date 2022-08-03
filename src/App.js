import Counter from './Counter';
import TodoList from './TodoList';
import './App.css';

function App(props) {
 
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
