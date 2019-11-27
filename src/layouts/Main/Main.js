import React from 'react';
import {Events, Quizzes, Questions, Users, Settings} from '../../components/UI';
import Auxiliar from '../../hoc/Auxiliar';

const Main = (props) => {
  return (
      <Auxiliar>
        <Events/>
        <Quizzes/>
        <Questions/>
        <Users/>
        <Settings/>
      </Auxiliar>
  );
}

export default Main;
