import { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './RouteTour.module.scss';

export const RouteTour: FC = () => (
  <div className="root">
    <h1>Route Tour</h1>
    <hr />

    {/* Private Routes */}
    <h2>Private Routes</h2>
    <div className={s.root__routes}>
      <code>
        <Link to="/home">/home</Link>
      </code>
      <code>
        <Link to="/trade/portfolio">/trade/portfolio</Link>
      </code>
      <code>
        <Link to="/trade/history">/trade/history</Link>
      </code>
    </div>

    {/* Public Routes */}
    <h2>Public Routes</h2>
    <div className={s.root__routes}>
      <code>
        <Link to="/">/</Link>
      </code>
      <code>
        <Link to="/connect">/connect</Link>
      </code>
      <code>
        <Link to="/trade/market">/trade/market</Link>
      </code>
    </div>
  </div>
);
