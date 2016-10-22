import React from 'react';

export const MainLayout = ({content}) => (
  <div className='main-layout'>
    <header>
      <h1>
        <div>
          <img src='./images/moona.png' alt='moona-logo' className='header-icon' />
        </div>
      </h1>
    </header>

    {content}

    <footer>
      <small>
        Made with <span className='footer__heart'>&hearts;</span> in St. Louis | Powered by Meteor & React 
      </small>
    </footer>
  </div>
)