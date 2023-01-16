import React, { useEffect, useReducer, useState } from 'react'
import Activity from '../components/categories/users/Activity'
import Follows from '../components/categories/users/Follows'
import Header from '../components/categories/users/Header'
import Options from '../components/categories/users/Options'
import Overview from '../components/categories/users/Overview'
import Navbar from '../components/reusable/Navbar'
import { myState, initialState } from '../components/categories/users/reducer'

function UserProfile() {

  const [state, dispatch] = useReducer(myState, initialState)

  return (
    <div>
        <Navbar /> 
        <Header />
        <Options overviewState={state.overview} followsState={state.follows} overview={() => dispatch({ type: 'overview' })} activity={() => dispatch({ type: 'activity' })} follows={() =>  dispatch({ type: 'follows' })}
        // activityState={state.overview}
        />
        {state.overview && <Overview />}
        {state.activity &&  <Activity /> }
        {state.follows && <Follows />}
    </div>
  )
}

export default UserProfile