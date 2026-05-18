import "./App.css";
import UseLayoutEffect from "./applications/uselayout-effect";

function App() {
  return (
    <div className="app">
      <h1 className="main-header">React Machine Coding</h1>
      <UseLayoutEffect />
    </div>
  );
}

export default App;

// Component renders
//       ↓
// DOM created
//       ↓
// useLayoutEffect runs
//       ↓
// Width measured
//       ↓
// Browser paints screen
