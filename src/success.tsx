import React from "react";
import Header from "./success-header";
import Paper from '@mui/material/Paper'
import "./success-header"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export const SuccessPage = (props) => {

  const borrower = props.getLoanAppData().firstName;
  //to help see that the app data was retrieved for success page. 
  console.log(props.getLoanAppData());

  return (
    
    <div>

      <Header></Header>
      <Paper elevation={3}>
        <div className="congrats">Congrats {borrower}, you submitted the form successfully! 
        <CheckCircleOutlineIcon/>
        </div>
      </Paper>
     
    </div>

  );

}
