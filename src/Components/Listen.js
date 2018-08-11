import React, { Fragment, Component } from 'react';

class Listen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      audioSource: '',
      displayInput: true,
    };
    
  }

  componentDidMount() {
    const { navigator, URL } = window; // (For clarity & reference safety)
    if (navigator && navigator.mediaDevices) {
      this.setState({
        displayInput: false,
      })
      navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((value) => {
          this.setState({ audioSource: URL.createObjectURL(value) });
      });
    }
  }

  set audioSource (src) {
    this.setState({
      audioSource: src,
      play: true,
    })
  }

  record = e => {
    e.preventDefault();
    let file = e.target.files[0];
    this.audioSource(window.URL.createObjectURL(file));
  }

  render() {
    return (
      <Fragment>
        {this.state.displayInput ?
        <input
          type="file"
          accept="audio/*"
          capture
        /> : null
        }
        <audio
          controls
          src={this.state.audioSource}
          onChange={this.record}
        />
      </Fragment>
    )
  }
}

export default Listen;
