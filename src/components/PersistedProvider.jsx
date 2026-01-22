import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index"; 

const PersistedProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={<div>Ładowanie koszyka...</div>} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default PersistedProvider;