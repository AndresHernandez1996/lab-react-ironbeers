import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import AllBeers from './components/home/AllBeers'
import BeerDetail from './components/home/BeerDetail'
import RandomBeer from './components/home/RandomBeer'
import BeerForm from './components/home/BeerForm'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/all-beers" component={AllBeers} />
        <Route exact path="/beer/:id" component={BeerDetail} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/create" component={BeerForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
