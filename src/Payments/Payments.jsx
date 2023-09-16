import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Payments = ({result}) => {
    const URL_MONEY =  `http://localhost:5000/profile/${result.IDuser}`;
    const URL_DELETE_MONEY = `http://localhost:5000/money/${result.IDuser}`;
    const URL_ADMIN_MONEY = `http://localhost:5000/profile/1`;
console.log(typeof(result.UserMoney));
const HandleUserPay = async()=>{
    try {
        const {data} = await axios.get(URL_MONEY);
        const userData = data;

        switch (result.Fin) {
            case `пополнить`:
                console.log(`switch пополнить`);
               
                userData.UserBalans = (Number(userData.UserBalans)+ Number(result.UserMoney));
                await axios.put(`${URL_MONEY}`, {...data , ...userData})
                const takeMoneyAdmin1 = async() =>{
                    try {
                        const {data} = await axios.get(URL_ADMIN_MONEY);
                        const userData = data;
                        userData.allMoney = (Number(userData.allMoney)+ Number(result.UserMoney));
                        await axios.put(`${URL_ADMIN_MONEY}`, {...data , ...userData})
                        /*SaleMoney */
                        console.log(userData);
                    } catch (error) {
                        console.log(error);
                    }
                }
                takeMoneyAdmin1();
                break;
                
                case `списать`:
                    console.log(`switch списать`);
                    userData.UserBalans = (Number(userData.UserBalans) - Number(result.UserMoney));
                    await axios.put(`${URL_MONEY}`, {...data , ...userData})
                    const takeMoneyAdmin = async() =>{
                        try {
                            const {data} = await axios.get(URL_ADMIN_MONEY);
                            const userData = data;
                            userData.SaleMoney = (Number(userData.SaleMoney)+ Number(result.UserMoney));
                            await axios.put(`${URL_ADMIN_MONEY}`, {...data , ...userData})
                            /*SaleMoney */
                            console.log(userData);
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    takeMoneyAdmin()
                break;

            case `Удалить`:
                
                await axios.delete(URL_DELETE_MONEY)
                console.log(`switch удалить`);
                break;

   
}
        console.log(`all good`);
    } catch (error) {
        console.log(`пиздец`);
    }

}
    
        if (result.IDuser != undefined) {
            
            HandleUserPay()       
        }
  return (
    <>
    </>
  )
}

export default Payments