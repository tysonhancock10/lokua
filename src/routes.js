import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from './components/Main/Main'
import Home from './components/Nav/Home/Home'
import About from './components/Nav/About/About'
import Method from './components/Nav/Method/Method'
import Faq from './components/Nav/Faq/Faq'
import Pricing from './components/Nav/Pricing/Pricing'
import Countries from './components/Nav/Countries/Countries'
import Mexico from './components/Nav/Countries/Mexico/Mexico'
import Russia from './components/Nav/Countries/Russia/Russia'
import Greece from './components/Nav/Countries/Greece/Greece'
import Nigeria from './components/Nav/Countries/Nigeria/Nigeria'
import Lab from './components/Nav/Countries/Greece/Lab'
import Mexlab from './components/Nav/Countries/Mexico/Mexlab'
import Ruslab from './components/Nav/Countries/Russia/Ruslab'
import Nigelab from './components/Nav/Countries/Nigeria/Nigelab'

export default (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/countries/nigeria/lab' component={Nigelab} />
        <Route path='/countries/russia/lab' component={Ruslab} />
        <Route path='/countries/mexico/lab' component={Mexlab} />
        <Route path='/countries/greece/lab' component={Lab} />
        <Route path='/countries/Nigeria' component={Nigeria} />
        <Route path='/countries/greece' component={Greece} />
        <Route path= '/countries/russia' component={Russia} />
        <Route path='/countries/mexico' component={Mexico} />
        <Route path='/home' component={Home} />
        <Route path='/method' component={Method} />
        <Route path='/faq' component={Faq} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/countries' component={Countries} />
        <Route path='/about' component={About} />

    </Switch>
)
