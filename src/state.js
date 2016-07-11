const state = {
    menu: {
      visible: false
    },
    home: {
      users: [
        {
          pic_url: require('file!./assets/person1.png'),
          image_url: require('file!./assets/image1.png'),
          name: 'Martin Groove',
          message: 'I can basejump from the shard! Can You?',
          people: 7,
          rate: 175,
          time: new Date()
        },
        {
          pic_url: require('file!./assets/person2.png'),
          image_url: require('file!./assets/image2.png'),
          name: 'Mark Anderson',
          message: 'Reckon you can rise to any challange? Prove it',
          people: 7,
          rate: 175,
          time: new Date()
        }
      ]
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
