import React, {useState, useEffect} from 'react';
import Expense from './Expense';
import mockData from './mockdata_todelete';
import axios from 'axios';

const ExpensesList = props => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() =>  {
        axios
          .get(/* "https://reqres.in/api/users" */)  //TO DO-- add the API endpoint to access user expense data.
          .then(res => {
            console.log(res);
            setExpenses(res);
          })
          .catch(err => {
            console.log(err.response);
          });
      }, []);

      const calcTotal = props => {
        let expenseTotal = 0;

        mockData.forEach(item => {
          
          expenseTotal = expenseTotal + item.amount;
        })
        console.log(expenseTotal);
        return expenseTotal;
      }
      const userTotal = calcTotal();
      // console.log('expenseTotal is: ' + calcTotal)



    return (

    <div className="expenses-list">
      <div className="expenses-summary">
      <h2>Your Summary: ${userTotal} spent.</h2>
      </div>
        
        {/* {console.log('calcTotal is: ' + calcTotal)} */}

    <h2>My Purchases</h2>

    {mockData.map(item => {
    // Map function that takes the user's Expense data, cycles through each Expense, and return an Expense (card) component for each one.
        return (
        <Expense
            key={item.id}
            title={item.title}
            amount={item.amount}
            />
            )}
        )
    }

    </div>
    )
}

export default ExpensesList;