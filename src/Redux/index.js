import  { combineReducers } from 'redux'
import { productsReducer} from './reducers';
const reducers = combineReducers({
    allProducts: productsReducer,
});

export default reducers;