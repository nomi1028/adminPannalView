import Home from "./components/Home";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import ResponsiveDrawer from "./components/Drawer";
import { BrowserRouter } from "react-router-dom";

function App() {
  function getLibrary(provider) {
    return new Web3(provider);
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div>
        <BrowserRouter>
          <ResponsiveDrawer />
        </BrowserRouter>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
