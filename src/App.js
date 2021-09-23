
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookcakeContainer from './components/HookcakeContainer';
import {Provider} from 'react-redux'
import store from './redux/cake/store';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HookcakeContainer/>
     <CakeContainer/>
     <IceCreamContainer/>
    </div>
    
    </Provider>
  );
}

export default App;
