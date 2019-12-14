import React from 'react';
import {DateRangeRounded,MailRounded,MenuRounded,SettingsApplicationsRounded,ChatBubbleRounded,
  PollRounded,PeopleAltRounded,ExitToAppRounded,DesktopAccessDisabledRounded} from '@material-ui/icons';
  
  const iconMap = new Map();
  iconMap.set("events", <DateRangeRounded />);
  iconMap.set("quizzes", <PollRounded />);
  iconMap.set("questions", <ChatBubbleRounded />);
  iconMap.set("users", <PeopleAltRounded />);
  iconMap.set("settings", <SettingsApplicationsRounded />);
  iconMap.set("logout", <DesktopAccessDisabledRounded />);
  iconMap.set("login", <ExitToAppRounded />);
  iconMap.set("menu", <MenuRounded />);
  iconMap.set("mail", <MailRounded />);

  const getIcon = (text) => {
    return iconMap.get(text.toLowerCase());
  };

  export default getIcon;