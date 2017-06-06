import React, { Component} from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal(){
      // add to compelte goals on the databaseURL
      //remove this goal from the goal list
      const { email } = this.props.user;
      const { title, serverKey } = this.props.goal;
      goalRef.child(serverKey).remove();
      completeGoalRef.push({email,title});
  }
  render () {
    const { email, title } = this.props.goal;
    return (
      <div style={{ margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
