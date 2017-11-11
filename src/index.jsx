class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
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

  test(e) {
    console.log(e);
    e.preventDefault();
  }

  componentDidMount() {
    this.get();
  }

  render() {

    return (
      <div>
        <h1>Hello, world!</h1>
        <Form test={this.test} />
        <Char_display characters={this.state.characters}/>
      </div>
    )

  }
}

ReactDOM.render(<Index />, document.getElementById('app'));