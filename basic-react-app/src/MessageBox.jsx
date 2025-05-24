import React from 'react';

function MessageBox({userName, textColor}) {
    
    return ( 
        <div >
            <h1 style = {{backgroundColor : textColor}}>Hello user {userName}</h1>    
        </div>
     );
}

export default MessageBox;