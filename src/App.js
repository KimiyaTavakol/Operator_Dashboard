import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';

function App() {
    return (
        <div id="body-pd">
            <AppLayout />
        </div>
    );
}

export default App;
