import React,{memo} from 'react'
import Doctor from './Doctor'

const Dashboard = ({appointments}) => {
  return (
    <>
      <Doctor appointments={appointments}/>
    </>
  )
}

export default memo(Dashboard)
