import produce from "immer";
import { StatementActionTypes, UPDATE_STATEMENTS } from "./types";

export type StatementsState = Readonly<{
    agents: []
}>

const initialState: StatementsState = {
    agents: []
};

const reducer = (state = initialState, action: StatementActionTypes) => produce(state, draft =>
{
    switch (action.type)
    {
        case UPDATE_STATEMENTS: {
            draft.agents = action.payload;
        }
        default:
            return state;
    }
})

export default reducer;