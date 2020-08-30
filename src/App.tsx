import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { TopList } from "./views/TopLIst";
import { Track } from "./views/Track";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={TopList}/>
        <Route path={"/track/:trackId"} component={Track}/>
      </Router>
    </div>
  );
}

export default App;
