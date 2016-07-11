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

      <button> <span className='plus-icon'/> CREATE CHALLANGE </button>
    </div>
  </div>;

export default Menu;
