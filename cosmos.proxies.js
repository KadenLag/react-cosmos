import createReduxProxy from 'react-cosmos-redux-proxy';
import createXhrProxy from 'react-cosmos-xhr-proxy';
import createFetchProxy from 'react-cosmos-fetch-proxy';
import configureStore from './configureStore';

const ReduxProxy = createReduxProxy({
    createStore: state => configureStore(state)
});

export default [
    ReduxProxy,
    createFetchProxy(),
    createXhrProxy(),
    // ...other proxies
];
