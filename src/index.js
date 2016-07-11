import React from 'react'
import { render } from 'react-dom'

/* fix tap delay on mobile browsers */
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();
import '!style!css!../node_modules/lato-font/css/lato-font.min.css';
import '!style!css!sass!./styles/index.scss';
import '!style!css!../node_modules/font-awesome/css/font-awesome.min.css';


import {controller, events} from './state.js'
import Menu from './components/menu.js'
import Home from './components/home.js'

class Container extends React.Component {
  constructor() {
    super();
    controller.initialize(this);
  }

  render = () =>
    <div className={`container ${this.state.menu.visible && 'show-menu'}`}>
      <Menu {...this.state.menu} />
      <Home {...this.state.home} visible={this.state.menu.visible}/>
    </div>;
}

render(
    <Container />,
  document.getElementById('root')
)
