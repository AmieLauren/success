import React from "react";
import Header from "./success-header";

export const SuccessPage = (props) => {

  const borrower = props.getLoanAppData().firstName;
  //to help see that the app data was retrieved for success page. 
  console.log(props.getLoanAppData());

  return (
    <div>
      <Header></Header>

      <div>Congrats {borrower}, you submitted the form successfully! </div>

    </div>

  );

}
