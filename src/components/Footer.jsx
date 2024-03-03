import React from 'react';
import reactLogo from '/Users/charliethegreat/Desktop/Everything/compSciStuff/Portfolio with React/digital-portfolio-2/src/assets/react.svg';

function Footer() {
    return (
    <div className='footer'>
        <ul className='center' style={{margin: 'auto', width: '50%'}}>
            <li><h3 style={{color: '#000000'}}>Created with &#128156; (and React)</h3></li>
           <li style={{verticalAlign: 'middle'}}><a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a></li>
            </ul>
    </div>);
}

export default Footer;