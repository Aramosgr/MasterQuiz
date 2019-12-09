import React from 'react';
import logo from "../../../assets/images/MasterQuizLogo2.png";
import classes from './ToolbarLogo.module.css';


const ToolbarLogo = () => {
    return ( 
        <div className={classes.Content}>
            <img alt="logo" src={logo} className={classes.Logo}/>
        </div>
     );
}
 
export default ToolbarLogo;