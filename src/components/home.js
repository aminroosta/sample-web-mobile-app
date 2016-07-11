import React from 'react'
import {events} from '../state.js'
import '!style!css!sass!../styles/home.scss';

const Home = ({visible}) =>
    <div className='app'>
      <div className='topbar'>
        <span><i className='fa fa-ellipsis-h'/> <i className='fa fa-wifi'/></span>
        <span>4:34 PM</span>
        <span>100% <i className='fa fa-battery-full'/></span>
      </div>
      <div className='card'>
        <div className='sub-menu'>
          <i className='fa fa-bars fa-2x' onTouchTap={events.toggleMenu} />
          <div className='buttons'>
            <span className='open'> Open </span>
            <span className='close'> Close </span>
          </div>
          <i className='fa fa-plus-circle fa-2x' onTouchTap={events.toggleMenu} />
        </div>
      </div>
      <div className='card'>
        <span onTouchTap={events.toggleMenu}> toggle menu </span>
      </div>
    </div>;

export default Home;
