import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(feedBack => (
        <Button
          feedBack={feedBack}
          key={feedBack}
          onClick={() => onLeaveFeedback(feedBack)}
        >
          {feedBack}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
