"use client"
import React, { useState } from 'react';
import { Wheel as WheelRo} from "react-custom-roulette";
import line from '../assets/line.png'

const Wheel = () => {

const [mustSpin, setMustSpin] = useState(false);
const [prizeNumber, setPrizeNumber] = useState(0);

const data = [
{ style: { backgroundColor: '#DD1858' } }, // #A6A6A6 - white #A31C47 - red #2EB47F - green #F2A53F - yellow
{ style: { backgroundColor: '#F6F6F6' } }, // #F6F6F6 - white #DD1858 - red #46E2A3 - green #F1BB48 -yellow
{ style: { backgroundColor: '#DD1858' } },
{ style: { backgroundColor: '#F6F6F6' } },
{ style: { backgroundColor: '#46E2A3' } },
{ style: { backgroundColor: '#F6F6F6' } },
{ style: { backgroundColor: '#DD1858' } },
{ style: { backgroundColor: '#F6F6F6' } },
{ style: { backgroundColor: '#F1BB48' } },
{ style: { backgroundColor: '#F6F6F6' } },
{ style: { backgroundColor: '#DD1858' } },
{ style: { backgroundColor: '#F6F6F6' } },
{ style: { backgroundColor: '#46E2A3' } },
{ style: { backgroundColor: '#F6F6F6' } },
{ style: { backgroundColor: '#DD1858' } },
{ style: { backgroundColor: '#F6F6F6' } },
{ style: { backgroundColor: '#DD1858' } },
{ style: { backgroundColor: '#46E2A3' } },
{ style: { backgroundColor: '#F6F6F6' } },


]

const handleSpinClick = () => {
if (!mustSpin) {
const newPrizeNumber = Math.floor(Math.random() * data.length);
setPrizeNumber(newPrizeNumber);
setMustSpin(true);
}
}



return (
<div className="">
    <div className="transform rotate-0 scale-[1.4]">
        <WheelRo innerRadius={72} mustStartSpinning={mustSpin} prizeNumber={prizeNumber} data={data}
            backgroundColors={['#3e3e3e', '#df3428' ]} textColors={['#ffffff']} onStopSpinning={()=> {
            setMustSpin(false);
            }}
            outerBorderWidth={ 0 }
            radiusLineWidth={ 0 }


            pointerProps={
            {src: line.toString('base64'), style: {width: '2px', height: '130px', transform: '', rotate: '0deg', top:
            '77%', right: '50%'}}
            // {src: `${line}`}
            }
            />
    </div>
    <div className='text-center mt-20'>
        <button className='bg-[#171717] py-3 px-7 rounded-xl text-2xl' onClick={handleSpinClick}>
            SPIN
        </button>
    </div>
</div>

);
};

export default Wheel;