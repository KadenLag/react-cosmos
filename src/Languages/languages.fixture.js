import Languages from './Languages';

export default [
    {
        component: Languages,
        name: 'languages',
        props: {
            languages: ['English', 'French', 'German', 'Polish', 'Russian', 'Chineses', 'Japanese']
        },
        url: '/languages',
        route: '/languages'
    }
];
