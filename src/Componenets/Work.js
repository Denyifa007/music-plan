import React, {useState} from 'react'
import '../Style/Work.css'
import './db'
import {plan} from './db'
import illustrationhero from '../Assets/illustration-hero (1).svg';
import iconmusic from '../Assets/icon-music (1).svg';


const Work = () => {
    const [planResult, setPlanResult] = useState(plan)
    function handleCancel(id){
        const removeItem = plan.filter((singlePlan)=> singlePlan.id !==id)
        setPlanResult(removeItem)
    }
  

    function  getPlan() {
        let year = 12
        if(planResult.period === 'Annual Plan'){
            setPlanResult({
                period: 'Monthly Plan',
                plan: Math.round(59.99/year),
                currency: '$',
                duration: '/monthly'
                
             
            })
        }else{
            setPlanResult({
                period: 'Annual Plan',
                plan: 59.99,
                currency: '$',
                duration: '/year'
            })
        }
              
           
    }
  return (
    <div className='body'>
        <div className='main'>
                <img src={illustrationhero} alt="" className='img1' />
                <div className='text'>
                <h2>Order Summary</h2>
                <p>You can now listern to millions of songs, audio books, and podcasts on any device anywhere you like!</p>
                <div className='music-details' >
                        <img src={iconmusic} alt="" className='music-logo'  />
                        <h5>{planResult.period}<span>{planResult.currency}{planResult.plan}{planResult.duration}</span></h5>
                        <button className='btn-change' onClick={getPlan}>Change</button>     
                    </div>
    
                {plan.map((datum) =>{
                    const {id} = datum 
                    return(
                        <div key={id}>
                        <button className='btn'>Proceed to Payment</button> 
                        <button className='btn-cancel' onClick={()=>handleCancel(id)}>Cancel Order</button>
                        </div>
                  
                    
                    )
                })}
               
               
                
                    

               
                
                
                </div>

        </div>
    


    </div>
  )
}

export default Work