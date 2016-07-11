import React from 'react'
import {events} from '../state.js'

const Home = ({visible}) =>
    <div className='app'>
        <span onTouchTap={events.toggleMenu}> toggle menu </span>
        Home
    </div>;

export default Home;
