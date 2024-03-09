import { Navigate, RouteObject } from 'react-router-dom';
import { TradePageContainer } from '../pages/TradesPageContainer/TradePageContainer';
import { MarketPage } from '../pages/TradesPageContainer/inside/MarketPage';
import AuthLayout from '../layouts/AuthLayout';
import { Trade } from '../layouts/PageLayout';
import { AuthPage } from '../pages/AuthPage';
import { RouteTour } from '../pages/MainPage/inside/RouteTour';

const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <RouteTour />,
  },
  {
    path: '/connect',
    element: <AuthLayout />,
    children: [{ index: true, element: <AuthPage /> }],
  },
  {
    path: '/trade',
    element: (
      <Trade>
        <TradePageContainer />
      </Trade>
    ),
    children: [
      { index: true, element: <Navigate to="/trade/market" replace /> },
      {
        path: 'market',
        element: <MarketPage />,
        // index: true,
        // children: [
        //   { path: ':marketName', index: true, element: <MarketPage /> },
        // ],
      },
    ],
  },
  { path: '*', element: <Navigate to="/connect" replace /> },
];

export default publicRoutes;
