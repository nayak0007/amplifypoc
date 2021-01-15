import React from 'react';
import { APP_KEY, APP_ENV } from "../constants";

const Dashboard = () => {
  return (
    <div>
      VAR {APP_KEY} {APP_ENV}
    </div>
  )
}

export default Dashboard;