import React, { Component } from 'react';

export default class Fetch extends Component {
    state = {
        isLoading: true,
        error: null,
        users: null,
        data: {}
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.setState({ data: json }))

        fetch('/users').then(response => {
        if (response.status === 200) {
            response.json().then(users => {
            this.setState({ isLoading: false, users });
            });
        } else {
            this.setState({
            isLoading: false,
            error: `Error ${response.status}`
            });
        }
        });
    }

    render() {
        const { isLoading, error, users } = this.state;
        console.log('state', this.state);

        if (isLoading) {
        return <div>Loading...</div>;
        }

        if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
        }

        return (
        <ul>
            {users.map(user => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        );
    }
}