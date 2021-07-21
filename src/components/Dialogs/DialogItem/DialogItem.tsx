import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css'

type DialogItemProps = {
    id: number
    name: string
    src: string
}


const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogsItems + ' ' + s.active}>
            <NavLink to={path}> <img className={s.img} src={props.src}/> {props.name} </NavLink>
        </div>
    )
}



export default DialogItem;