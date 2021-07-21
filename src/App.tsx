import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs, {dialogsType, messagesType} from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {postsType} from "./components/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Post from "./components/Profile/MyPosts/Post/Post";
import store, {StatePropsType, StoreType} from "./redux/state";
import state from "./redux/state";


type AppPropsType = {
    appState: StatePropsType
    dispatch: (action: any) => void
    store: StoreType
}


function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs messages={props.appState.dialogsPage.messages}
                                                                  dialogs={props.appState.dialogsPage.dialogs}
                                                                  newMessageBody={props.appState.dialogsPage.newMessageBody}
                                                                  store={store}
                    />}/>
                    <Route path='/profile' render={() => <Profile posts={props.appState.profilePage.posts}
                                                                  dispatch={props.dispatch}
                                                                  newPostText={props.appState.profilePage.newPostText}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
