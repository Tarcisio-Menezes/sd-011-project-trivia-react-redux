import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Headerlogin from '../components/header';
import { requestApiThunk } from '../actions';
import Answer from '../components/Answer';

class TriviaQuestions extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    const { setStateGame } = this.props;
    setStateGame(token);
  }

  render() {
    // const { questions } = this.props;
    // const category = 'multiple';
    return (
      <div>
        <Headerlogin />
        <Answer />
      </div>);
  }
}
// export default TriviaQuestions;
const mapDispatchToProps = (dispatch) => ({
  setStateGame: (questions) => dispatch(requestApiThunk(questions)),
});

const mapStateToProps = (state) => ({
  questions: state.fetchReducers.questions,
});

export default connect(mapStateToProps, mapDispatchToProps)(TriviaQuestions);

TriviaQuestions.propTypes = {
  questions: PropTypes.array,
  setStateGame: PropTypes.func,
}.isRequired;
