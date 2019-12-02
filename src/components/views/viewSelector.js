import { Events, Quizzes, Questions, Users, Settings } from '.';
import { EVENTS, QUIZZES, QUESTIONS, USERS, SETTINGS } from '../../constants/routes';

const components = [
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