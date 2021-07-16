/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTimer } from '../actions/gameActions';

export default function Timer() {
  const dispatch = useDispatch();
  const totalTime = 30;
  const gameStore = useSelector((state) => state.game);
  const { timer, selectedChoice } = gameStore;

  useEffect(() => {
    dispatch(setTimer(totalTime));
  }, []);

  const disableButtons = () => {
    const buttons = document.querySelectorAll('button[name="q_answer"]');
    buttons.forEach((button) => button.setAttribute('disabled', true));
    const allLabels = document.querySelectorAll('label');
    const btnPrimary = 'btn-primary';
    allLabels.forEach((el) => {
      el.classList.add('btn-danger', 'wrongAnswer');
      el.classList.remove(btnPrimary);
    });
  };

  const timeChanger = () => {
    const interval = 1000;
    const timeLeft = setTimeout(() => dispatch(setTimer(timer - 1)), interval);
    if (timer > 0 && !selectedChoice) {
      return timeLeft;
    } if (timer === 0 || selectedChoice) {
      clearTimeout(timeLeft);
      disableButtons();
    }
  };

  useEffect(() => {
    timeChanger();
  }, [timer]);

  return (
    <div>
      <div>
        <h1>
          Time left:
          {timer}
        </h1>
      </div>
    </div>
  );
}
