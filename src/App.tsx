import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ReduxStorePropsType} from "./redux/store";
import store from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: ReduxStorePropsType
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}
                    />}/>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
// messages={props.store.getState().dialogsPage.messages}
// dialogs={props.store.getState().dialogsPage.dialogs}
// newMessageBody={props.store.getState().dialogsPage.newMessageBody}