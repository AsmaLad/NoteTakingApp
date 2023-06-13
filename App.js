//REDUX
import { Provider } from 'react-redux';
import store from './src/store/configureStore';

//NAVIGATION
import { AppStack } from './src/navigation/AppStack';
import { DarkModeProvider } from './src/constants/theme';


export default function App() {
  return (
    <Provider store={store}>
      <DarkModeProvider>
      <AppStack/>

      </DarkModeProvider>
    </Provider>
  );
}

