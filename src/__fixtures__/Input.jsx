import React from 'react';

export default class Input extends React.Component {
    render() {
        const style = {
            background: '#333',
            color: '#fefefe',
            padding: '10px',
            marginLeft: '10px'
        }
        return (
            <div style={style}>
                hello world
                <button style={style}>Click</button>
            </div>
        );
    }
}
