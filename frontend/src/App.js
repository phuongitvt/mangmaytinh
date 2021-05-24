import { StateProvider } from './ApplicationContext';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';

function App() {
  return (
      <StateProvider>
          <LoginScreen />
          <MainScreen />
      </StateProvider>
  );
}

export default App;
