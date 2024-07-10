// src/store/store.js

// Import necessary modules from redux and the root reducer
import { configureStore } from '@reduxjs/toolkit'; // Updated to '@reduxjs/toolkit' for correct usage
import rootReducer from './reducers'; // Import the combined root reducer

// Configure the Redux store with the root reducer
const store = configureStore({
  reducer: rootReducer, // Provide the root reducer to configure the store
});

// Export the configured store as the default export
export default store;
