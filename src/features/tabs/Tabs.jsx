import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import './Tabs.scss';


const Tabs = ({ tabs, location }) => (
  <div className="Tabs">
    <div className="Tabs__tabs">
      {tabs.map(t => (
        <div
          key={`tab_${t.label}}`}
          className={`Tabs__tabs-tab ${location.pathname === t.path ? 'active' : ''}`}
        >
          <Link to={t.path}>{t.label}</Link>
        </div>
      ))}
    </div>
    <span className="Tabs__title">Meetup React</span>
  </div>
);


Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};


export default withRouter(Tabs);
