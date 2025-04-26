import React from 'react';
import { Link } from 'react-router-dom';

function BottomNavigation({ activeIcon, onFavorites }) {
  const icons = [
    {
      name: 'home',
      path: 'M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z',
      to: '/'
    },
    {
      name: 'filter',
      path: 'M22 3H2L10 12.46V19L14 21V12.46L22 3Z',
      to: '/filter'
    },
    {
      name: 'saved',
      path: 'M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z',
      to: '/saved'
    },
    {
      name: 'profile',
      paths: [
        'M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21',
        'M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
      ],
      to: '/profile'
    }
  ];

  return (
    <div className="bottom-navigation">
      {icons.map((icon, index) => (
        <Link 
          key={index} 
          to={icon.to}
          className={`nav-button ${activeIcon === icon.name ? 'active' : ''}`}
          onClick={icon.name === 'saved' ? onFavorites : undefined}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.isArray(icon.paths) ? (
              icon.paths.map((path, i) => (
                <path
                  key={i}
                  d={path}
                  stroke={activeIcon === icon.name ? "#FF7A59" : "#CCCCCC"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))
            ) : (
              <path
                d={icon.path}
                fill={activeIcon === icon.name ? "#FF7A59" : "none"}
                stroke={activeIcon === icon.name ? "#FF7A59" : "#CCCCCC"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </Link>
      ))}
    </div>
  );
}

export default BottomNavigation; 