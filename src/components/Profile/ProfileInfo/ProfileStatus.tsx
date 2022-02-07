import React, {ChangeEvent, ChangeEventHandler} from "react";
import {updateStatus} from "../../../redux/profile-reducer";


export type ProfileStatusType = {
  status: string
  updateStatus:typeof updateStatus

}

class ProfileStatus extends React.Component <ProfileStatusType> {
  state = {
    editMode: false,
    status:this.props.status

  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
      this.props.updateStatus(this.state.status)
  }
onStatusChange= (e:ChangeEvent<HTMLInputElement>) =>{
    this.setState( {
      status: e.currentTarget.value
    })
}
  render() {
    return (
      <div>
        {!this.state.editMode &&
        <div>
            <span
                onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                   value={this.state.status}/>
        </div>
        }

      </div>
    )
  }
}

export default ProfileStatus