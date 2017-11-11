class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Form />
        <Char_display />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));