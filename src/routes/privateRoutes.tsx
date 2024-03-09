import { Navigate, RouteObject } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import AppLayout from '../layouts/AppLayout';
import { TradePageContainer } from '../pages/TradesPageContainer/TradePageContainer';
import { HistoryPage } from '../pages/TradesPageContainer/inside/HistoryPage';
import { PortfolioPage } from '../pages/TradesPageContainer/inside/PortfolioPage';
import { Trade } from '../layouts/PageLayout';

const privateRoutes: RouteObject[] = [
  {
    path: '/home',
    element: <AppLayout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: '/trade',
    element: (
      <Trade>
        <TradePageContainer />
      </Trade>
    ),
    children: [
      { index: true, element: <Navigate to="/trade/portfolio" replace /> },
      { path: 'portfolio', index: true, element: <PortfolioPage /> },
      { path: 'history', index: true, element: <HistoryPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
];

export default privateRoutes;
