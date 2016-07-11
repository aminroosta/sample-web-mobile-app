import React from 'react'
import { render } from 'react-dom'
import {controller, events} from './state.js'

/* fix tap delay on mobile browsers */
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();
import '!style!css!sass!./styles/index.scss';

const Menu = () =>
  <div className='menu'>
    My menu
  </div>;

const Home = ({visible}) =>
    <div className='app'>
        <span onTouchTap={events.toggleMenu}> toggle menu </span>
        Home
    </div>;

class Container extends React.Component {
  constructor() {
    super();
    controller.initialize(this);
  }

  render = () =>
    <div className={`container ${this.state.menu.visible && 'show-menu'}`}>
      <Menu {...this.state.menu} />
      <Home {...this.state.home}/>
    </div>;
}

render(
    <Container />,
  document.getElementById('root')
)
