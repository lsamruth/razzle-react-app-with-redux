import React from 'react';
import logo from './react.svg';
import './Home.css';
import { getTodos } from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Home extends React.Component {
    componentDidMount(){
        this.props.get();
    }
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
            {this.props.todos.map(i => {
                return <li key={i.id}>{i.task}</li>
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        todos: state.todo.todos,
        ok:console.log(state)
    };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators(
        {
            get: getTodos,
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Home);
