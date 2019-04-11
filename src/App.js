import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './components/layout/Main'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'
import Reset from './components/pages/Reset'
import About from './components/pages/About'
import Features from './components/pages/Features'
import FAQ from './components/pages/FAQs'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/password-reset" component={Reset} />
            <Route path="/about-us" component={About} />
            <Route path="/features" component={Features} />
            <Route path="/faqs" component={FAQ} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
