import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const RNRedux = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
