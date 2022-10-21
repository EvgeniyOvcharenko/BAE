import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Header from "./src/header/header";
import MobileAppBanner from "./src/mobileAppBanner/mobileAppBanner";
import Footer from "./src/footer/footer";
import HomePage from "./src/homePage/homePage";
import AccountsPage from "./src/pages/accounts/accounts";
import AccountsMain from "./src/pages/accounts/accountsMain/accountsMain";
import { Provider } from 'react-redux';
import reduxStore from './redux/store.js';
import accountsList from "./src/pages/accounts/accountsList.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        {accountsList.map((item, index) => {
          return <Route key={index} path={item.href} element={<AccountsMain info={item.info}/>} />;
        })}
        <Route path="/accounts_current" element={<AccountsMain />} />
        <Route
          path="*"
          element={
            <aside style={{ padding: '1rem' }}>
              <p>There&apos;s nothing here!</p>
            </aside>
          }
        />
      </Routes>
    </BrowserRouter>
    <MobileAppBanner/>
    <Footer/>
  </Provider>
);
