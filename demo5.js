class Football extends React.Component {

  shoot = () => {
    alert("Goal! This refers to the component: " + this.constructor.name);
    /*
      - 'this' is bound to the Football component instance
      - Using this.constructor.name gives the class name
    */
  }

  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}

// ✅ Render AFTER the class is defined
ReactDOM.render(<Football />, document.getElementById('root'));
