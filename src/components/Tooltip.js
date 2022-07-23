import React from 'react'
import Progressbar from './Progress_bar';
const Tooltip = (props) => {
    return (
        <>
            <div className="tootTipC">
                <div className="tooltipCard" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="tooltipContent">
                        <p>{props.nutritionName}</p>
                        <div className="target" style={{ display: 'flex' }}>
                            <p>{props.proteinTarget}{props.proteinTarget===undefined?null:'g'}</p>
                            <p>{props.carbTarget}{props.carbTarget===undefined?null:'g'}</p>
                            <p>{props.fatTarget}{props.fatTarget===undefined?null:'g'}</p>
                        </div>
                    </div>
                    {props.proteinConsumed===undefined?null:<Progressbar parentWidth={props.proteinConsumed} bgcolor="#F45C84" progress={props.proteinConsumed} height={20} />}
                    {props.fatConsumed===undefined?null:<Progressbar parentWidth={props.fatConsumed} bgcolor="#03C6FA" progress={props.fatConsumed} height={20} />}
                    {props.carbConsumed===undefined?null:<Progressbar parentWidth={props.carbConsumed} bgcolor="#F0C50F" progress={props.carbConsumed} height={20} />}
                </div>
            </div>
        </>
    )
}

export default Tooltip