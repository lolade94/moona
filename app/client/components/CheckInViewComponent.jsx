import React from 'react';

import RiskQuestionsComponent from './components/RiskQuestionsComponent';
import TakeInButtonComponent from './components/TakeInButtonComponent';
import TurnAwayButtonComponent from './components/TurnAwayButtonComponent';

const CheckInViewComponent = () => {
  return (
    <div>
      <h2>
        FIELDS <i>(*required)</i>
      </h2>
      <h2>
        GENERAL INFORMATION OF CLIENT
      </h2>
      <form action=''>
          <input type='text' className='firstName' value='your first name' />
          <input type='text' className='lastName' value='your last name' />
          <input type='text' className='nickname' value='name you go by' />
          <p><b>your age*</b></p> 
          <input type='radio' className='age' value='1' /><18<br />
          <input type='radio' className='age' value='2' />>18-25<br />
          <input type='radio' className='age' value='3' />25-45><br />
          <input type='radio' className='age' value='4' />45-60<br />
          <input type='radio' className='age' value='5' />60+<br />
          <p><b>gender*</b></p>
          <input type='radio' className='age' value='1' />Male<br />
          <input type='radio' className='age' value='2' />>Female<br />
          <p><b>SSN</b></p>
          <input type='number' className='ssn' />
          <p><b>has consented to participate</b></p>
          <input type='radio' className='consent' value='1' />Yes<br />
          <input type='radio' className='consent' value='2' />No<br />
          <p><b>Referred by</b></p>
          <input type='radio' className='referral' value='1' />HRC<br />
          <input type='radio' className='referral' value='2' />Family/Friend<br />
          <input type='radio' className='referral' value='3' />Organization<br />
          <input type='radio' className='referral' value='4' />Other<br />
          <input type='radio' className='referral' value='4' />None<br />
      </form>
      <RiskQuestionsComponent />
      <TurnAwayButtonComponent />
      <TakeInButtonComponent />
    </div>
  )
}

export default CheckInViewComponent;