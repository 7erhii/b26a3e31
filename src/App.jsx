import React from "react";
import { createRoot } from 'react-dom/client';

import PhoneCore from "./components/phoneCore/phoneCore.js";

export const App = () => {
  return (
    <div className="container">
      <PhoneCore />
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);

export default App;
