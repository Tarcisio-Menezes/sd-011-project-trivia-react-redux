import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Feedback extends Component {
  constructor() {
    super();
    this.handleClickPlayAgain = this.handleClickPlayAgain.bind(this);
    this.handleClickRanking = this.handleClickRanking.bind(this);
  }

  handleClickPlayAgain() {
    const { history } = this.props;
    history.push('/');
  }

  handleClickRanking() {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const state = JSON.parse(localStorage.getItem('state'));
    const three = 3;
    return (
      <div>
        <Header />

        <h2 data-testid="feedback-text">
          {state.player.assertions < three ? 'Podia ser melhor...' : 'Mandou bem!' }
        </h2>
        <p data-testid="feedback-total-score">{state.player.score}</p>
        <p data-testid="feedback-total-question">{state.player.assertions}</p>
        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ this.handleClickPlayAgain }
        >
          Jogar novamente
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.handleClickRanking }
        >
          Ver Ranking
        </button>
      </div>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  history: PropTypes.string.isRequired,
};
