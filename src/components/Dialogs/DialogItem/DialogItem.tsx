import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css'

type DialogItemProps = {
    id: number
    name: string
}


const DialogItem = (props: DialogItemProps) => {
    let path = '/dialog/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}



export default DialogItem;