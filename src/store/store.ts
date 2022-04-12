import {combineReducers, configureStore} from "@reduxjs/toolkit";
import addSuperHero from "./reducers/addSuperHeroSlice";
import {superHeroAPI} from "../services/SuperHeroService";

const rootReducer = combineReducers({
  [superHeroAPI.reducerPath]: superHeroAPI.reducer,
  addSuperHero
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>{
      return getDefaultMiddleware().concat(superHeroAPI.middleware)
    }
  })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']