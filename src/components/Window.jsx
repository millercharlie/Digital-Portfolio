import React from 'react';

// h1 should return { props.name }, but for now it returns 'Projects'
// Button onclick should set the window as invisible

function Window(props) {
    return (
    <div className='window'>
        <div className='window-heading left-align'>
            <h2 className='center' style={{color: '#000000'}}>Projects</h2>
            <div>
                <button>X</button>
            </div>
        </div>
        <div className='main-content'>
            <h1>lmao no</h1>
        </div>
    </div>
    );
}

export default Window;