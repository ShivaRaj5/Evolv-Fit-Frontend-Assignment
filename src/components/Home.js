import React, { useState } from 'react'
import Card from './Card'
import UserData from './UserData'
const Home = () => {
    const [info]=useState(UserData);
    return (
    <>
        <div className="cardContainer">
        {info.map((ele,idx,arr)=>{
          return (<Card key={ele.userId} userId={ele.userId} imgsrc={ele.imgsrc} name={ele.name} email={ele.email} stepsWalked={ele.stepsWalked} stepsTarget={ele.stepsTarget} performedDate={ele.performedDate} scheduledDate={ele.scheduledDate} calorieIntake={ele.calorieIntake} calorieTarget={ele.calorieTarget} proteinConsumed={ele.proteinConsumed} proteinTarget={ele.proteinTarget} carbConsumed={ele.carbConsumed} carbTarget={ele.carbTarget} fatConsumed={ele.fatConsumed} fatTarget={ele.fatTarget}/>)
        })}
      </div>
    </>
  )
}

export default Home