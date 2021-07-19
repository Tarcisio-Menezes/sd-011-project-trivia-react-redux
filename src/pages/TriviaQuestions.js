import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import * as userActions from '../actions';
import Question from '../components/Question';
import CountdownTimer from '../components/CountDownTimer';
import { NextQuestionBtn } from '../components/NextQuestionBtn';

class TriviaQuestions extends Component {
  constructor(props) {
    super(props);
    this.toTheNextQuestion = this.toTheNextQuestion.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const { setStateGame } = this.props;
    setStateGame(token);
  }

  toTheNextQuestion() {
    const { getNextQuestion } = this.props;
    getNextQuestion();
  }

  render() {
    const { questions, seconds, wasAnswered, questionIndex } = this.props;
    const MAX_QUESTIONS_INDEX = 5;
    const { results } = questions;
    const eachResult = Object.values({ ...results });
    return (
      <div>
        <Header />
        <CountdownTimer />
        <h1 data-testid="question-category">Categoria</h1>
        <h2 data-testid="question-text">Questão:</h2>
        { ((seconds === 0 || wasAnswered) && questionIndex < MAX_QUESTIONS_INDEX)
        && <NextQuestionBtn toTheNextQuestion={ this.toTheNextQuestion } /> }
        { eachResult ? <Question eachResult={ eachResult[questionIndex] } /> : null }
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  setStateGame: (payload) => dispatch(userActions.requestApiThunk(payload)),
  getNextQuestion: () => dispatch(userActions.getNextQuestion()),
});

const mapStateToProps = (state) => ({
  questions: state.fetchReducers.questions,
  seconds: state.timeOver.seconds,
  questionIndex: state.questionHandlers.questionIndex,
  wasAnswered: state.questionHandlers.wasAnswered,
});

export default connect(mapStateToProps, mapDispatchToProps)(TriviaQuestions);

TriviaQuestions.propTypes = {
  questions: PropTypes.array,
  setStateGame: PropTypes.func,
  wasAnswered: PropTypes.bool,
}.isRequired;
