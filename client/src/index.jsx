import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Char_display from './components/char_display.jsx';
import Form from './components/form.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.post = this.post.bind(this);
    this.get = this.get.bind(this);
    this.state = {
      characters: [],
      posted: false
    };
  }

  get() {
    var that = this;

    $.ajax({
      method: 'GET',
      url: '/allChars'
    }).then(function(data) {
      that.setState({
        characters: data
      });
    }).done();
  }

  post(data) {
    var that = this;

    $.ajax({
      method: 'POST',
      url: '/newChar',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).then(function(res) {
      that.get();
    }).done();
  }

  componentDidMount() {
    this.get();
  }

  render() {

    return (
      <MuiThemeProvider>
        <div>
          <h1>RPG Character Generator</h1>
          <Form post={this.post} />
          <h4>Recently created characters...</h4>
          <Char_display characters={this.state.characters}/>
        </div>
      </MuiThemeProvider>
    )

  }
}

ReactDOM.render(<Index />, document.getElementById('app'));