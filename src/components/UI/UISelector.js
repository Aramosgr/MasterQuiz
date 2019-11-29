import { Events, Quizzes, Questions, Users, Settings } from './';

const components = {
    "Events": Events,
    "Quizzes" : Quizzes,
    "Questions": Questions,
    "Users": Users,
    "Settings": Settings
}

export const UISelector = (type) => components[type];