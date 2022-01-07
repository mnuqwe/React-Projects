import logo from './logo.svg';
import './App.css';
import CakeContainer from './container/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './HooksCakeContainer/HooksCakeContainer'
import IceCreamContainer from './container/IceCreamContainer'
import UserContainer from './container/UserContainer';
import LearnHooks from './container/LearnHooks';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <LearnHooks />
      {/* <UserContainer />
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer /> */}
    </div>
    </Provider>
  );
}

export default App;
