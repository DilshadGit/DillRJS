import React from 'react'

const Hello = () => {
    // return (
    //     <div className='container'>
    //         <h1>Hello</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'home', className: 'container'},
        React.createElement('h2', null, 'Home'));
}

export default Hello;
