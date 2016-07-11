import React from 'react'
import moment from 'moment'
import {events} from '../state.js'
import '!style!css!sass!../styles/home.scss';

const User = ({pic_url, image_url, name, message, people, rate, time})  =>
  <div className='user'>
    <div className='title'>
        <img src={pic_url} className='circled' />
        <span className='name'>{name}</span>
        <span className='rate'>{rate} <i className='fa fa-star' /></span>
    </div>
    <div className='message mid-font-size'>
        {message}
    </div>
    <div className='pic'>
      <img src={image_url} />
      <span className='time'>{moment(time).format('HH:mm:ss')}</span>
    </div>
  </div>;


const Home = ({visible, users}) =>
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
        {users[0] && <User {...users[0]} /> } {/* first user */}
      </div>
      {/* the rest of users */}
      {users.slice(1).map(u =>
        <div className='card'>
          <User {...u} />
        </div>
      )}
    </div>;

export default Home;
