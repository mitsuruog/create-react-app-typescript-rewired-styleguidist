/**
 * Libraries
 */
import * as classnames from 'classnames';
import * as React from 'react';

/**
 * Prop interface
 */
export interface IHeroProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * React Component
 */
export const Hero: React.SFC<IHeroProps> = (props) => {
  const { className, children } = props;

  const rootStyle = classnames('blueyeoman-c-hero', 'hero', {
    [`${className}`]: Boolean(className),
  });

  return (
    <section className={rootStyle}>
      <div className="hero-body">
        <div className="container">
          {children}
        </div>
      </div>
    </section>
  );
};
