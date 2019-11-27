import React from 'react';
import {Events, Quizzes, Questions, Users, Settings} from '../../components/UI';
import Auxiliar from '../../hoc/Auxiliar';
import {Route} from 'react-router-dom'; 

const Main = (props) => {
  return (
      <Auxiliar>
        <Route path="/" exact component={Events} />
        <Route path="/quizzes" component={Quizzes} />
        <Route path="/questions" component={Questions} />
        <Route path="/users" component={Users} />
        <Route path="/settings" component={Settings} />
      </Auxiliar>
  );
}

export default Main;
