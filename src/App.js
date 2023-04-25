import 'font-awesome/css/font-awesome.min.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './pages/Main';
import DataPage from './pages/DataPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position='top-right' />
        <Routes>
          <Route index element={<Main />} />
          <Route path='/data' element={<DataPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
