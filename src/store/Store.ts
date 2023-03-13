import {createStore} from 'redux';
import { tokenReducer } from './token/TokensReducer';

const store = createStore(tokenReducer);

export default store;