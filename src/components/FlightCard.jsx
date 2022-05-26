import React from 'react'

const FlightCard = (props) => {
  return (
    <>
        <div className='bg-white p-4 rounded-lg'>
            <figure><img src={props.Image} alt={props.MissionName} /></figure>
            <h2 className='font-bold text-blue-900 py-3'>{props.MissionName} #{props.te+1}</h2>
            <ul>
                <li><strong>Mission Ids:</strong> 
                
                {(props.MissionIds.length > 0) ? props.MissionIds.map((current, index) => {return <span key={index}>{current}</span>}) : <span></span>}
                
                </li>
                <li><strong>Launch year:</strong> {props.LaunchYear}</li>
                <li><strong>Successful Launch:</strong> {(props.LaunchSucess) ? 'true' : 'false'}</li>
                <li><strong>Successful Landing:</strong> {(props.LaunchLanding) ? 'true' : 'false'}</li>
            </ul>
        </div>
    </>
  )
}

export default FlightCard