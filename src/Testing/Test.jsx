import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
            super(props);
            this.reduxTest = this.reduxTest.bind(this);
    }

    reduxTest = (event, testData) => {
        event.preventDefault();
        console.log('testData', testData);
    }

    render() {
        const style = {
            background: '#333',
            color: '#fefefe',
            padding: '10px',
            marginLeft: '10px'
        }

        const testData = 'redux data';

        return (
            <div style={style}>
                <h1>Hello, {this.props.name}</h1>
                <button style={style} onClick={event => this.reduxTest(event, testData)}>Click</button>
            </div>
        );
    }
}
