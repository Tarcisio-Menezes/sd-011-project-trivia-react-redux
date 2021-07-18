import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { requestApiThunk } from '../actions';
import Question from '../components/Question';
import CountdownTimer from '../components/CountDownTimer';
import { NextQuestionBtn } from '../components/NextQuestionBtn';

class TriviaQuestions extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    const { setStateGame } = this.props;
    setStateGame(token);
  }

  render() {
    const { questions, seconds, wasAnswered, questionIndex } = this.props;
    console.log(wasAnswered);
    const { results } = questions;
    const eachResult = Object.values({ ...results });
    return (
      <div>
        <Header />
        <CountdownTimer />
        <h1 data-testid="question-category">Categoria</h1>
        <h2 data-testid="question-text">Questão:</h2>
        { (seconds === 0 || wasAnswered) && <NextQuestionBtn /> }
        { eachResult ? <Question eachResult={ eachResult[questionIndex] } /> : null }
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  setStateGame: (payload) => dispatch(requestApiThunk(payload)),
});

const mapStateToProps = (state) => ({
  questions: state.fetchReducers.questions,
  seconds: state.getSeconds.seconds,
  questionIndex: state.question.questionIndex,
  wasAnswered: state.question.wasAnswered,
});

export default connect(mapStateToProps, mapDispatchToProps)(TriviaQuestions);

TriviaQuestions.propTypes = {
  questions: PropTypes.array,
  setStateGame: PropTypes.func,
  wasAnswered: PropTypes.bool,
}.isRequired;
