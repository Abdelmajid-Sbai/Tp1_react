import React, { useState } from 'react';


export default function Calculatrice() {
  
  const [res,setres]=useState("")


  const clear=()=>{
    setres("");
  }

  const taper=(e)=>{
    setres(res.concat(e.target.value))
    
  }

  const backspase=(e)=>{
    setres(res.slice(0,res.length - 1));
    
  }

  const calculate=()=>{
    try{
      setres(eval(res).toString());
    }catch(err){
      setres('invalide syntaxe')
    }
   
  }
  return (
    <>
    
    
    <div className='container' >
        
      <div className='kyb'> 
        <input className='res' type='text'  value={res}/>
        <input type='button' className='oper' value='Clear' onClick={clear}/>
        <input type='button' className='oper' value='(' onClick={taper}/> 
        <input type='button' className='oper' value=')' onClick={(e)=>taper(e)}/>
        <input type='button' className='oper' id='back' value='C' onClick={backspase}/>
        
        <br/>
        <input type='button' value='1' onClick={taper}/> 
        <input type='button' value='2' onClick={(e)=>taper(e)}/>
        <input type='button' className='oper' value='=' onClick={calculate}/>
        
        <input type='button' value='3' onClick={(e)=>taper(e)}/>
        <input type='button' value='4' onClick={(e)=>taper(e)}/>
        <input type='button' className='oper' value='+'onClick={(e)=>taper(e)} />
        
      
        <input type='button' value='5' onClick={(e)=>taper(e)}/>
        <input type='button' value='6' onClick={(e)=>taper(e)}/>
        <input type='button' className='oper' value='-' onClick={(e)=>taper(e)}/>
        
        <input type='button' value='7' onClick={(e)=>taper(e)}/>
        <input type='button' value='8' onClick={(e)=>taper(e)}/>
        <input type='button' className='oper' value='*' onClick={(e)=>taper(e)}/>
       
        <input type='button' value='9' onClick={(e)=>taper(e)}/>
        <input type='button' value='0' onClick={(e)=>taper(e)}/>
        <input type='button' className='oper' value='/' onClick={(e)=>taper(e)}/>
       

      </div> 
      
    </div> 
     
    
    </>
  )
}