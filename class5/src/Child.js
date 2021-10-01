import React, {useContext, useState} from 'react';
import {transactionContext} from './transanctionContext'

function Child () {
    let {transactions, addTransaction} = useContext(transactionContext)
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event)=>{
        event.preventDefault();
        if(Number(newAmount)=== 0){
            alert('Please Enter Correct Amount');
        return false;
    }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setDesc('')
        setAmount(0)
    }
    const getIncome = ()=>{
        let income = 0;
        for (var i = 0; i < transactions.length; i++){
            if (transactions[i].amount > 0)
            income += transactions[i].amount
        }
        return income;
    }
    const getExpense = ()=>{
        let expense = 0
        for(var i = 0; i < transactions.length; i++){
            if(transactions[i].amount < 0)
            expense += transactions[i].amount
        }
        return expense
    }

    return (
        <div className='container'>
            <h2 className='container2'>Expanse Tracker</h2>
            <br />
            <h3 className='container3'>YOUR BALANCE </h3>
            <h1 className='balance'>{getIncome() + getExpense()}</h1>
            <br />
            <div className='container_expense'>
                <h3>INCOME <br /> {getIncome()}</h3>
                <h3>EXPENSE <br /> {getExpense()}</h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className='transaction-list'>
                {transactions.map((transObj, ind)=>{
                    return(
                        <li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li> 
                    )
                })}
                
            </ul>
            <h3>Add new transaction</h3>
            <hr />
            <form className='transaction-from' onSubmit={handleAddition} >
                <label>
                    Enter Description <br />
                    <input type='text' value={newDesc} placeholder='Enter Text' required onChange={(ev)=> setDesc(ev.target.value)}></input>
                </label>
                <br />

                <label>
                    Enter Amount <br />
                    <input type='number' value={newAmount} placeholder='Enter Amount' required onChange={(ev)=>setAmount(ev.target.value)}></input>
                </label>
                <br />
                <input type="submit" value='Add Transaction' />


            </form>
        </div>
    )
}

export default Child;