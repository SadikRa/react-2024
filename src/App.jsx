import "./App.css";

import Box from "./components/box";
import Counteries from "./components/Counteries";
import Term from "./components/Term";
// import Users from './components/Users'

function App() {
  return (
    <>
      <Counteries></Counteries>

      <Box task={"sadik rahman"} isName={true}></Box>
      <Term></Term>

      {/* <Users></Users> */}
    </>
  );
}

export default App;
