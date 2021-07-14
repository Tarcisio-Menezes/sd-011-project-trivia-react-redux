import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/login';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      enableButton: false,
      user: '',
      email: '',
    };
    this.inputValidation = this.inputValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  inputValidation() {
    const { user, email } = this.state;
    if (user.length !== 0 && email.length !== 0) {
      this.setState({ enableButton: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.inputValidation());
  }

  render() {
    const { user, email, enableButton } = this.state;
    const { userInfos } = this.props;

    return (
      <form>
        <label htmlFor="user">
          <input
            name="user"
            type="text"
            id="user"
            data-testid="input-player-name"
            placeholder="Digite o nome do usuário"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            type="text"
            id="email"
            data-testid="input-gravatar-email"
            placeholder="Digite seu email"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ !enableButton }
          onClick={ () => userInfos({ user, email }) }
        >
          Jogar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userInfos: (infos) => dispatch(login(infos)),
});

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  userInfos: PropTypes.objectOf().isRequired,
};
