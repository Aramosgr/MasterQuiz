import React from 'react';
import Auxiliar from '../../../hoc/Auxiliar';
import ImageAvatar from '../ImageAvatar';
import classes from './Profile.module.css';

const Profile = () => {
    return ( 
        <Auxiliar>
            <div className={classes.Profile}>
                <ImageAvatar/>
                <p>REABLACE STUDIOS</p>
                <p>PIRPIDO</p>
            </div>
        </Auxiliar>
     );
}
 
export default Profile;