import { Events, Quizzes, Questions, Users, Settings, Login, Home } from '.';
import { EVENTS, QUIZZES, QUESTIONS, USERS, SETTINGS, LOGIN, HOME } from '../../constants/routes';

const components = [
    {
        name: "Home",
        component: Home,
        route: HOME
    },
    {
        name: "Login",
        component: Login,
        route: LOGIN
    },
    {
        name: "Quizzes",
        component: Quizzes,
        route: QUIZZES
    },
    {
        name: "Questions",
        component: Questions,
        route: QUESTIONS
    },
    {
        name: "Users",
        component: Users,
        route: USERS
    },
    {
        name: "Events",
        component: Events,
        route: EVENTS
    },
    {
        name: "Settings",
        component: Settings,
        route: SETTINGS
    }
];

export const viewSelector = (type) => components.find(x => x.name === type);