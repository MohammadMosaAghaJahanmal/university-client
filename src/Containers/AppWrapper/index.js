import React, { useContext} from "react";
import Layout from "../Layout";
import { AuthContext } from "../../authContext";
import Loader from "../../Components/Loader";
const AppWrapper = (props) =>
{

  const authContext = useContext(AuthContext);
  if(authContext.loading)
    return <Loader />;
  return (
    <Layout />
  )
}


export default (AppWrapper);