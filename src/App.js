import logo from './logo.svg';
import './App.css';
import Header from './component/Headers'
import UserList from './component/UserList'
import './component/style.css'

function App() {
  return (
    <div className="App">
      <div className='header-content'>

        <h2>User Page List</h2>
        <Header />
      </div>
      <UserList />
    </div>
  );
}

export default App;
