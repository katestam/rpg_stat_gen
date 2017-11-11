class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  post(data) {
    // ajax call to newchar
  }

  generate(e) {
    // take input from form
    // put into data object
    // send to post function
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Form generate={this.generate} />
        <Char_display />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));