import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/style.scss';
import { ReactNode } from 'react';
import { LoginPage, MainPage, NotFoundPage, RegistrPage } from '@/pages';

const ROUTES_CONFIG: { path: string; element: ReactNode }[] = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/registration',
        element: <RegistrPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {ROUTES_CONFIG.map((route) => (
                    <Route {...route} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
