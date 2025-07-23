import React from 'react';

function Team() {
  return (
    <div className='container '>
      <h2 className='text-muted text-center mb-5'>People</h2>

      <div className='row p-5'>
        <div className='col-2'></div>
        <div className='col text-center'>
        <img src='media/images/nithinKamath.jpg' style={{borderRadius:"50%",width:"70%",marginBottom:"12px",marginLeft:"20px"}}/>
        <h3>Nithin Kamath</h3>
        <p className='text-muted'>Founder, CEO</p>
        </div>

        <div className='col'>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          
          <p>Playing basketball is his zen.</p>
      
          <p>
            Connect on <a href='https://nithinkamath.me/'>Homepage</a> / <a href='https://tradingqna.com/u/nithin/summary'>TradingQnA</a> / <a href='https://x.com/Nithin0dha'>Twitter</a>
          </p>
        </div>
       <div className='col-2'></div>
      
      </div>
      <br/><br/><br/><br/>
    </div>
  );
}

export default Team;
