import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';

function App({ signInComponent }) {
  return (
    <div className="App">
      <SignIn signInComponent={signInComponent} />
    </div>
  );
}

export default App;
