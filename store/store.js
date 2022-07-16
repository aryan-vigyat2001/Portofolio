const {configureStore} = require('@reduxjs/toolkit');
import navReducer from './navslice';

const store=configureStore({
    reducer:{
        navbar:navReducer
    }


})

export default store;