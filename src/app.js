import React from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import 'scss/global.scss'

import home from 'pages/home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={home} exact />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
