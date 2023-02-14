import { Flex } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import './App.css';
import HomePage from './pages/HomePage';
import store from './state/createStore';

function App() {
  return (

    <Provider store={store}>
    <Flex direction={'column'} w={'80%'}  alignItems={'center'} justifyContent={'center'} margin={'auto'}>
    <HomePage/>
    </Flex>
    </Provider>
  );
}

export default App;
