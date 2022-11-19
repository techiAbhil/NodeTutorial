import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './src/login';
import Profile from './src/profile';
import Registration from './src/registration';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route index={true} path="/" element={<Profile />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
