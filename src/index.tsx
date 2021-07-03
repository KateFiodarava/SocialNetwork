import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {postsType} from "./components/Profile";
import Post from "./components/Profile/MyPosts/Post/Post";
import {dialogsType, messagesType} from './components/Dialogs/Dialogs';

let posts: Array<postsType> = [
    {id: 1, message: 'Hi,how are you?', likeCounter: 12},
    {id: 2, message: "It's my first post", likeCounter: 11},
]
let postsElements = posts.map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)

let dialogs: Array<dialogsType> = [
    {id: 1, name: 'Vadim'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Virtor'},
    {id: 4, name: 'Olga'},
    {id: 5, name: 'Kate'},
]
let messages: Array<messagesType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hello'},
    {id: 4, message: 'How are you?'},
]

ReactDOM.render(<App posts={postsElements} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
