import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import PhonePlugin from "./components/phonePlugin/phonePlugin.js";

const App = () => {
  return (
    <div className="container">
      <PhonePlugin />
      {/* <Header />
      <div className="container-view">Some activities should be here</div> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
