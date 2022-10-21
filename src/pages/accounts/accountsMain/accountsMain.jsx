import React from 'react';
import './accountsMain.scss';
import AccountMainTitle from '@src/containers/accountMain/accountMainTitle/accountMainTitle';
import AccountMainArticle from '@src/containers/accountMain/accountMainArticle/accountMainArticle';
import AccountMainAside from '@src/containers/accountMain/accountMainAside/accountMainAside';

function AccountsMain(prop) {
  const { title, article, aside } = prop.info;
  return (
    <div className="accounts__main">
      <AccountMainTitle text={title.text} title={title.title} />
      <div className="accounts__content">
        <AccountMainArticle
          title={article.title}
          img={article.img.bar}
          buttonName={article.buttonName}
        />
        <AccountMainAside aside={aside}/>
      </div>
    </div>
  );
}

export default AccountsMain;
