import React from 'react'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import "./App.css"
import Checkout from './pages/Checkout/Checkout'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'

const App = (props) => {
    
    return(
        <Router>
            <Header />
               <Switch>
                   <Route exact path="/"><Home/></Route>
                   <Route path="/checkout"> <Checkout /></Route>
                   <Route path="/search"> <Search /></Route>
                   </Switch>
               </Router>
    )
}

export default App
