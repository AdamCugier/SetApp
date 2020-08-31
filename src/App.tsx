import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import TopList from "./views/TopLIst";
import Track from "./views/Track";
import { Navigation } from "./views/components/Navigation/Navigation";
import { Footer } from "./views/components/Footer/Footer";
import { AppContainer, AppContent } from "./views/style/Globals";

function App() {
  return (
    <Router>
      <AppContainer className="App">
        <Navigation/>
        <AppContent>
          <Switch>
            <Route path={"/top-list"} component={TopList}/>
            <Route path={"/track/:trackId"} component={Track}/>
          </Switch>
        </AppContent>
        <Footer/>
      </AppContainer>
    </Router>
  );
}

export default App;
