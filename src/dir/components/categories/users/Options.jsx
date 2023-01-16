import React, { useEffect, useReducer } from 'react'
import { myState, initialState } from './reducer'


function Options({overview,activity,follows, overviewState,activityState,followsState }) {



  return (
    <div className="flex w-full mt-8 md:mt-12 px-4 md:px-6">
      <div className="w-full h-auto flex justify-between items-center">
        <div
         onClick={overview}
          className={!overviewState ? 'opacity-50' : ' border-b-2 border-blue-600'}>
          <h2 className="text-xl  ubuntuBold cursor-pointer">Overview</h2>
        </div>

        <div
         onClick={activity}
         
          className={'opacity-50'}> 
          <h2 className="text-xl  ubuntuBold cursor-pointer">Activity</h2>
        </div>

        <div
         onClick={follows}
          className={!followsState ? 'opacity-50' : 'border-b-2 border-blue-600'}>
          <h2 className="text-xl  ubuntuBold cursor-pointer">Follows</h2>
        </div>
      </div>
    </div>
  )
}

export default Options
