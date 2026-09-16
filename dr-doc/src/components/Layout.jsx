import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Ticker from './Ticker';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col" style={{ minHeight: 'calc(100vh - 52px)' }}>
      {!isHome && <Ticker />}
      <div className="flex flex-1 overflow-hidden">
        {!isHome && <Sidebar />}
        <main className={`flex-1 bg-cream overflow-auto ${isHome ? '' : ''}`}>
          <div className={isHome ? '' : 'p-6'}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
