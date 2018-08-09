import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import ListenButton from '../Components/ListenButton'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: undefined,
    }
  }

  setActiveModal = (modal) => {
    console.log(`${modal} selected`)
    this.setState({
      activeModal: modal,
    })
  };

  render() {
    return (
      <div>
        <Modal
          open={!!this.state.activeModal}
          onClose={() => { this.setActiveModal(false) }}
        >
            <h1>{this.state.activeModal}</h1>
        </Modal>
        <ListenButton
          onClick={() => this.setActiveModal('Listen')}
        >
          Listen now
        </ListenButton>
        <Button>
          Record for later
        </Button>
        <Button>
          Listen and record
        </Button>
      </div>
    )
  }
};

export default Home;
