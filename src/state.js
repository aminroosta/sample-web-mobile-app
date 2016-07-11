const state = {
    menu: {
      visible: false
    },
    home: {
      
    }
};

class Controller {
    initialize(component) {
      component.state = state;
      this.update = () => {
        component.setState(state)
        console.warn(state);
      };
    }
};

export const controller = new Controller();

export const events = {
  toggleMenu: () => {
    state.menu.visible = !state.menu.visible;
    controller.update();
  }
};
