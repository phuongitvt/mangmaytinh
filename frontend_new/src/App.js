import { StateProvider } from './ApplicationContext';
import LoginScreen from './home/LoginScreen';
import MainScreen from './home/MainScreen';

function App() {
  return (
      <StateProvider>
          <LoginScreen />
          <MainScreen />
      </StateProvider>
  );
}

export default App;
