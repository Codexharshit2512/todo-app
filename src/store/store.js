import { createStore } from "redux";
import { rootReducer } from "../redux/reducers/rootReducer";

export let store = createStore(rootReducer);
