import React, { useState } from 'react'
import styled from 'styled-components'

const Form = () => {

  const [name, setName] = useState('')
  const [email, setEmail] =useState('')
  const [date, setDate] = useState('')
  const [tite, setTite] = useState()

  const changeHandler = (e) => {
     const {name, value} = e.target;

     if(name === 'name'){
        setName(value)
     } else if(name ===  'email'){
        setEmail(value)
     } else if(name === 'date'){
        setDate(value)
        function diff_year_month_day(dt1, dt2) 
        {
   
         let time =(dt2.getTime() - dt1.getTime()) / 1000;
         let year  = Math.abs(Math.round((time/(60 * 60 * 24))/365.25));
         let month = dt2.getMonth() - dt1.getMonth();;

         const msDiff = dt2.getDate() - dt1.getDate();
        //  const aDayIn = 24 *60 *60* 1000

         let days =  Math.round(msDiff)
         return "Year :- "+ year +" Month :- " + month + " Days :-" + days;
         
        }

        let dt1 = new Date(value)
        let dt2 = new Date("2023-12-31");
    
        var diff = diff_year_month_day(dt1, dt2)
        setTite(diff ); 
     }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Form submit name ${name}, ${email}`)
  }
  return (
    <>
    <Wrapper>
     <div className="form-inspire" style={{marginTop: "12px"}}>
        <div className="form-inspire-all" style={{background: '#fff'}}>
            <img src="/inspirecover.png" width='100%' alt="" />
            <form action="" className='main-form' onSubmit={submitHandler}>
                <p className='form-para' style={{fontWeight: '400', margin: '0px'}}>Inspire School Academic Year 2024-2025</p>
                <hr/>
                <div className='form-info'>
                    <p className='para-title'>INFORMATION ABOUT THE CHILD</p>
                    <label htmlFor="name" className='form-label'>Name of the child (in block letters)</label>
                    <input type="text" className='form-input' value={name} name="name" id="name" onChange={changeHandler}/>
                </div>
                <div className='form-info'>
                    <label htmlFor="gender" className='form-label'>Gender</label>
                    <div className="radio-gender" style={{display: 'flex'}}>
                       <span style={{marginRight: '30px'}}><input type="radio" name="gender" id="" />&nbsp;Boy</span>
                       <span><input type="radio" name="gender" id=""/>&nbsp;Girl</span>
                    </div>
                </div>
                <div className='form-info'>
                    <label htmlFor="mobile" className='form-label'>Mobile</label>
                    <input type="text" className='form-input' name="mobile" id="mobile" onChange={changeHandler}/>
                </div>
                <div className='form-info'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input  value={email}  type="email" className='form-input' name="email" id="email" onChange={changeHandler}/>
                </div>

                <div className='form-info'>
                    <label htmlFor="date" className='form-label'>Date</label>
                    <input  value={date}  type="date" className='form-input' name="date" id="date" onChange={changeHandler}/>
                </div>

                <p>31/12/2023</p>

                <p><strong>{tite}</strong></p>
                <button type='submit' style={{background:"#e5e5e5", padding: '8px', border: '1px solid rgb(93 90 90)',borderRadius: '8px'}}>Continue</button>
            </form>
        </div>
     </div>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
    .form-inspire-all{
        width: '50%';
    }
    .main-form{
        padding: 20px;
    }
   .form-inspire{
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   .form-para{
      font-size: 22px;
   }

   .form-info{
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
   }
   .form-label{
      font-weight: 700;
      font-size: 13px;
   }
   .form-input{
        width: 70%;
        border: 1px solid #dbd5d5;
        box-shadow: 1px 1px 4px 0px rgb(0 0 0 / 39%)
   }
   @media (max-width : 768px){
    .form-inspire-all{
        width: '100%';
    }
    .main-form{
        padding: 9px;
    }
      .form-para, .para-title{
        font-size: 12px;
      }
   }
`;
export default Form