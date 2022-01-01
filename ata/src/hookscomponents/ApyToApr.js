import React, {useState} from 'react';

const ApyToApr = () => {

       const [yourApy, setYourApy] = useState("")
       const [period, setPeriod] = useState("")
       const [total, setTotal] = useState("")

       const handleTotal = (e) => {
            e.preventDefault()
            setTotal (((Math.pow (1+ (Number(yourApy/100)) , (1/period))) -1) * period * 100)
       }

       

    return (
        <div>
               <h1 className='pt-5'>APY to APR</h1>

               <div className='d-inline-flex'>
               <form className="row align-items-center w-100" onSubmit={handleTotal}>

<input className="form-control w-auto" type="text" value={yourApy} onChange={(e) => setYourApy (e.target.value)}></input>

<span className='w-auto m-5'>% APY compounding</span>

<select class="form-select w-auto"value={period} onChange={(e) => setPeriod(Number(e.target.value))}>
        <option value=""></option>
        <option value="1">annualy</option>
        <option value="2">semester</option>
        <option value="12">monthly</option>
        <option value="52">weekly</option>
        <option value="365">daily</option>
</select>

<span className='w-auto m-5'>is</span>

    <button class="btn btn-secondary w-auto p-2" type="submit" >Calculate</button>

<p className='pt-2'>{isNaN(Number(total).toFixed(2)) ? ("0.00") : (Number(total).toFixed(2))} % APR</p>

    </form>           

               </div>

            
            
        </div>
   
        
          )

}

export default ApyToApr;