import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import ListenButton from '../Components/ListenButton'
import Listen from '../Components/Listen';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: '',
    }
  }

  setActiveModal = (modal) => {
    this.setState({
      activeModal: modal,
    })
  };

  displayModal() {
    return !!this.state.activeModal;
  }

  render() {
    return (
      <div>
        <Modal
          open={this.displayModal()}
          onClose={() => { this.setActiveModal() }}
        >
          <div>
            {this.state.activeModal}
            <Listen />
          </div>
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
