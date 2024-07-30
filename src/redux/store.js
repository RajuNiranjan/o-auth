// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import UserReducer from './Actions/user'
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";


// const rootReducer = combineReducers({ user: UserReducer })

// const presistConfig = {
//     key: "root",
//     storage,
//     version: 1
// }

// const presistedReducer = persistReducer(presistConfig, rootReducer)



// export const store = configureStore({
//     reducer: presistedReducer
// })

// export const persistor = persistStore(store)



import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./Actions/user";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({ user: userReducer });

const persitConfig = {
    key: "root",
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persitConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);