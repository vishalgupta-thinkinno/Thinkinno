import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { textSliceActions } from './store/textContentSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import About from './components/About';
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('/content.json', { signal })
      .then(res => res.json())
      .then(result => {
        dispatch(textSliceActions.addInitialText(result));
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      {/* <Outlet /> */}
      <About/>
      <Footer/>
    </>
  );
}

export default App;
