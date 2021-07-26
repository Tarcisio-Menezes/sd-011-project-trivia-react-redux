import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../CSS/Home.css';

class Button extends Component {
  constructor() {
    super();
    this.handleButtonLink = this.handleButtonLink.bind(this);
  }

  handleButtonLink() {
    const { numberNext, confirmResponse, nextQuestion } = this.props;
    const four = 4;
    const numberOfQuestions = numberNext >= four;
    return (
      <div className="button-next-control">
        { numberOfQuestions
          ? (
            <Link to="/feedback">
              <button
                type="button"
                data-testid="btn-next"
                className="button-next"
              >
                Próxima
              </button>
            </Link>
          ) : (
            <button
              type="button"
              className="button-next"
              data-testid="btn-next"
              onClick={ () => {
                nextQuestion();
                confirmResponse();
              } }
            >
              Próxima
            </button>
          )}
      </div>
    );
  }

  render() {
    const { renderButton } = this.props;
    return (
      <div>
        { renderButton ? this.handleButtonLink() : (<div />)}
      </div>
    );
  }
}

Button.propTypes = {
  renderButton: PropTypes.bool.isRequired,
  numberNext: PropTypes.number.isRequired,
  confirmResponse: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
};

export default Button;
