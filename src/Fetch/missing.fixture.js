import Fetch from './Fetch';

export default {
    component: Fetch,

    fetch: [
        {
        matcher: '/users',
        response: 404
        }
    ]
};