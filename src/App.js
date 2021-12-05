
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Videos from './components/Videos';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import SearchPage from './components/SearchPage';
import VideoPlayer from './components/VideoPlayer';
import SideVideos from './components/SideVideos';
import React, { useState } from 'react'

function App() {

const [search, setsearch] = useState('')

  return (
    <div className="App">
        <Router>
        <Header  setsearch={setsearch}/>
            <Switch>
              <Route path="/search">
               
              <div className="content">
                        <Sidebar/>
                       <SearchPage  search= {search}/>
                     
                  </div>
                  
              </Route>
             
              <Route path="/play">
                  <div className="content">
                       
                       <VideoPlayer />
                       <SideVideos/>
                  </div>
                  </Route>
                  <Route path="/">
                  <div className="content">
                        <Sidebar/>
                        <Videos />
                  </div>

              
              </Route>
            </Switch>

        </Router>


     
    </div>
  );
}

export default App;
