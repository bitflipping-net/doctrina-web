
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import configureStore from "./store";

export type AppStore = ReturnType<typeof configureStore>
export type RootState = ReturnType<AppStore["getState"]>;
export type ActionTypes = ReturnType<AppStore["dispatch"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    ActionTypes
>

export type AppThunkDispatch<T = void> = ThunkDispatch<RootState, T, ActionTypes>;