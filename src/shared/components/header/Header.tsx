/**
 * Libraries
 */
import * as classnames from 'classnames';
import * as React from 'react';

/**
 * Prop interface
 */
export interface IHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * React Component
 */
export const Header: React.SFC<IHeaderProps> = (props) => {
  const { className } = props;

  const rootStyle = classnames('blueyeoman-c-header', 'navbar', 'is-primary', {
    [`${className}`]: Boolean(className),
  });

  return (
    <nav className={rootStyle}>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://github.com/mitsuruog" target="_blank">
          mitsuruog
        </a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/mitsuruog/create-react-app-typescript-rewired-styleguidist" target="_blank">
          GitHub
        </a>
      </div>
    </nav>
  );
};
