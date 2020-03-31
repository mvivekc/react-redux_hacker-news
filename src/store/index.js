import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
const logger = createLogger();
const saga = createSagaMiddleware();
export default createStore(
  rootReducer,
  undefined,
  applyMiddleware(logger, saga)
);

saga.run(rootSaga);
