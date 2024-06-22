import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainBox from "./MainBox";

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <MainBox/>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
