import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { textSliceActions } from './store/textContentSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet } from 'react-router-dom';
import About from './components/About';
function App() {
const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('/content.json', {signal})
    .then(res => res.json())
    .then(result => {
      dispatch(textSliceActions.addInitialText(result));
    })
    .catch(err => {
      err.name ==='Abort'? "" : "";
    })
    return ()=> {
      controller.abort();
    }
  }, []); 

  return (
    <>
    <Header />
    <Outlet/>
    <About />
    {/* <Footer /> */}
    </>
  );
}

export default App;