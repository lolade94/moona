import React from 'react';

export const LoginLayout = ({content}) => (
  <div className='main-layout'>
    <header>
      <h1>
        Login Page
      </h1>
    </header>

    {content}

    <footer>
      <small>
        <a href='http://madewithloveinbaltimore.org' id='made-love'>Made with <span className='footer__heart'>&hearts;</span> in Baltimore</a> | Powered by Meteor & React | <a href='https://github.com/danlee2/HomeworkTracker'>Github Repo</a>
      </small>
    </footer>
  </div>
)



