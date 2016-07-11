import React from 'react'
import '!style!css!sass!../styles/menu.scss';

const userpic = require('file!../assets/user.png');

const Menu = () =>
  <div className='menu'>
    <div className='info'>
      <div className='user'>
        <img src={userpic} className='circled' />

        <span className='name'>Olia Gozha</span>
        <span>Bet rate 116 <span className='star-icon'/></span>
      </div>
    </div>
    <button> <i className='fa fa-plus-circle'/> CREATE CHALLANGE </button>
    <ul className='links'>
      <li> <i className='fa fa-tasks' />Activity Feed </li>
      <li> <i className='fa fa-anchor' />My Challanges </li>
      <li> <i className='fa fa-comments-o' />Discussions</li>
      <li> <i className='fa fa-bar-chart' />My Stats</li>
      <li> <i className='fa fa-user' />My Connections</li>
      <li> <i className='fa fa-star-o' />Best Bets</li>
    </ul>
  </div>;

export default Menu;
