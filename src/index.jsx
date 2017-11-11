class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      posted: false
    };
    this.post = this.post.bind(this);
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
    }).then(this.get())
    .done();
  }

  componentDidMount() {
    this.get();
  }

  render() {

    return (
      <div>
        <h1>Hello, world!</h1>
        <Form post={this.post} />
        <Char_display characters={this.state.characters}/>
      </div>
    )

  }
}

ReactDOM.render(<Index />, document.getElementById('app'));