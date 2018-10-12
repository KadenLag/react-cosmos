import Test from './Test';

export default [
    {
        component: Test,
        name: 'active state',
        props: {
            disabled: true
        },
        url: '/test',
        route: '/test'
    },
    {
        component: Test,
        name: 'passing props',
        props: {
            name: 'Nick'
        }
    }
];
