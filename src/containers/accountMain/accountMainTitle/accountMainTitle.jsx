import React from 'react';
import './accountMainTitle.scss';

function AccountsMainTitle(prop) {
  const {text, title} = prop;
  return (
    <div className="accounts__main_title">
      <p>{text}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default AccountsMainTitle;