import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, RouterProvider, createBrowserRouter} from "react-router-dom";
import VirturalScroll from "./components/virtual-scroll/virtural-scroll";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: '/virtual-scroll',
        element: <VirturalScroll height={300} fuzzyItemHeight={30} listData={[{key: 1, text: "1"},
            {key: 1, text: "2"},
            {key: 1, text: "3"},
            {key: 1, text: "4"},
            {key: 1, text: "5"},
            {key: 1, text: "6"},
            {key: 1, text: "7"},
            {key: 1, text: "8"},
            {key: 1, text: "9"},
            {key: 1, text: "10"}]}/>
    }
]);
ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
