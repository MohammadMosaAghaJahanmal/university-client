import React, {useContext} from "react";
import Layout from "../Layout";
import { AuthContext } from "../../authContext";
const AppWrapper = (props) =>
{

  const authContext = useContext(AuthContext);
  if(authContext.loading)
    return null;
    
  return (
    <Layout />
  )
}


export default AppWrapper;