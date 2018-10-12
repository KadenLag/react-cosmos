import Fetch from './Fetch';

export default {
    component: Fetch,

    fetch: [
        {
        matcher: '/users',
        response: [
            {
            id: 1,
            name: 'John'
            },
            {
            id: 2,
            name: 'Jessica'
            }
        ]
        }
    ]
};