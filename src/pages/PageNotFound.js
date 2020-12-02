import React from 'react';
import { MessageBoxButtons } from '../components/MessageBox/MessageBox';

export default function PageNotFound(props) {
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <div>
      <MessageBoxButtons
        title="Page Not Found"
        text={`The page ${props.location.pathname} cannot be found`}
        goBack={goBack}
      />
    </div>
  );
}
