import { combineReducers } from "redux";
import agents from "./agents";
import statements from "./statements";
import users from "./users";
import auth from "./auth";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { ActivityActionTypes } from "./activities/types";
import { AgentsActionTypes } from "./agents/types";
import { AuthActionTypes } from "./auth/types";
import { StatementActionTypes } from "./statements/types";
import { UsersActionTypes } from "./users/types";

const createRootReducer = (history: History) => combineReducers({
    agents,
    statements,
    users,
    auth,
    router: connectRouter(history)
});

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>

export type AppActionTypes = ActivityActionTypes | AgentsActionTypes | AuthActionTypes | StatementActionTypes | UsersActionTypes;

export default createRootReducer;