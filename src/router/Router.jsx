import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
// import UserCards from './pages/UserCards'; // Uncomment this when the file is ready

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Dashboard Layout */}
        <Route path="/dashboard" element={<MainLayout />}>
          
          {/* Default route inside dashboard: Redirects /dashboard -> /dashboard/user */}
          <Route index element={<Navigate to="/dashboard/user" replace />} />
          
          {/* Dashboard Pages */}
          {/* Replace the <div> with <UserCards /> when you are ready */}
          <Route path="user" element={<div>User Cards Page</div>} /> 
          <Route path="product" element={<div>Product Page</div>} />
          
          {/* Add more nested routes here (order, invoice, etc.) */}
        </Route>
        
        {/* Root Route: Redirects / -> /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Optional: Catch-all route for 404 pages */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}