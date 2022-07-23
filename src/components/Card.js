import React, { useEffect, useState } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Tasks from '../images/tasks.png'
import User from '../images/user.png'
import 'react-circular-progressbar/dist/styles.css';
import { PieChart } from 'react-minimal-pie-chart';
import Notification from '../images/notification.png'
import { Link } from 'react-router-dom';
import Tooltip from './Tooltip';
const Card = (props) => {
    const proteinConsumed = props.proteinConsumed;
    const carbConsumed = props.carbConsumed;
    const fatConsumed = props.fatConsumed
    const dataMock = [
        { title: 'PROTEIN', value: proteinConsumed, color: '#F45C84' },
        { title: 'FATS', value: fatConsumed, color: '#03C6FA' },
        { title: 'CARBS', value: carbConsumed, color: '#F0C50F' },
    ];
    const [step, setStep] = useState(props.stepsTarget);
    const [cal, setCal] = useState(props.calorieTarget);
    const incBtnStep = () => {
        let maxVal = props.stepsTarget + 500;
        if (step < maxVal)
            setStep(step + 1)
    }
    const decBtnStep = () => {
        let minVal = props.stepsTarget - 500;
        if (step > minVal)
            setStep(step - 1)
    }
    const incBtnCal = () => {
        let maxVal = props.calorieTarget + 100;
        if (cal < maxVal)
            setCal(cal + 1)
    }
    const decBtnCal = () => {
        let minVal = props.calorieTarget - 100;
        if (cal > minVal)
            setCal(cal - 1)
    }
    const workoutUrl = `/${props.userId}/workout`;
    const nutritionUrl = `/${props.userId}/nutrition`;
    const [feedback, setFeedback] = useState(false);
    const getCurrentDate = () => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const date = new Date();
        const currDate = date.getDate()
        const currMonth = months[date.getMonth()]
        const currDateMonth = currDate + ' ' + currMonth
        if (props.scheduledDate === currDateMonth) {
            setFeedback(true)
        }
    }
    useEffect(() => {
        getCurrentDate();
    })
    const nutritionNames = ['PROTEIN', 'CARBS', 'FAT']
    return (
        <>
            <div className="card">
                <div className="cardContent">
                    <div className="logoContainer">
                        <img src={props.imgsrc} alt="logo" />
                    </div>
                    <div className="nameEmail">
                        <h3>{props.name}</h3>
                        <p>{props.email}</p>
                    </div>
                    <div className="steps">
                        <div style={{ width: 70, height: 70 }}>
                            <CircularProgressbarWithChildren value={props.stepsWalked} maxValue={step} counterClockwise={true}>
                                <div style={{ fontSize: 12, marginTop: -5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <strong>{props.stepsWalked}</strong>
                                    <p>Walked</p>
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="btnContainer">
                            <button onClick={incBtnStep}>+</button>
                            <h2>{step / 1000}k</h2>
                            <h2>target</h2>
                            <button onClick={decBtnStep}>-</button>
                        </div>
                    </div>
                    <div className="workoutContainer">
                        <div className="workContent">
                            <div className="userContent">
                                <img src={User} alt="logo" />
                                <h3 style={{ margin: '0px 10px' }}>{props.performedDate}</h3>
                            </div>
                            {feedback ?
                                <div className="userContent" style={{ backgroundColor: '#CC3838', borderRadius: '10px', padding: '3px 10px' }}>
                                    <img src={Tasks} alt="logo" />
                                    <h3 style={{ margin: '0px 10px' }}>{props.scheduledDate}</h3>
                                </div> :
                                <div className="userContent">
                                    <img src={Tasks} alt="logo" />
                                    <h3 style={{ margin: '0px 10px' }}>{props.scheduledDate}</h3>
                                </div>
                            }
                        </div>
                        <Link to={workoutUrl}> {feedback ? <button style={{ backgroundColor: '#CC3838' }}> ! </button> : <button> &#62; </button>} </Link>
                    </div>
                    <div className="nutrition">
                        <div style={{ width: 70, height: 70, cursor: 'pointer' }}>
                            <PieChart
                                data={dataMock}
                                lineWidth={20}
                                label={({ dataEntry }) => `${props.calorieIntake}cal`}
                                labelStyle={{
                                    fontSize: '25px',
                                    fontFamily: 'sans-serif',
                                    fill: 'white'
                                }}
                                labelPosition={0}
                                animate
                                className="tooltip-on-hover"
                            />
                            <div className="tooltip">
                                <Tooltip nutritionName={nutritionNames[0]} proteinConsumed={proteinConsumed} proteinTarget={props.proteinTarget} />
                                <Tooltip nutritionName={nutritionNames[1]} carbConsumed={carbConsumed} carbTarget={props.carbTarget} />
                                <Tooltip nutritionName={nutritionNames[2]} fatConsumed={fatConsumed} fatTarget={props.fatTarget} />
                            </div>
                        </div>
                        <div className="btnContainer">
                            <button onClick={incBtnCal}>+</button>
                            <h2>{cal / 1000}k</h2>
                            <h2>target</h2>
                            <button onClick={decBtnCal}>-</button>
                        </div>
                        <Link to={nutritionUrl}> <button id='nutritionbtn'> &#62; </button> </Link>
                    </div>
                    <div className="notificationContainer">
                        <div className="notificationimg">
                            <img src={Notification} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card