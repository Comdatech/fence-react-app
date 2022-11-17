//import local assets

//import local components
import Header from "./header";
import Sidebar from "./sidebar";

//import external libraries and assets
import React, { useState} from "react";


const PageLayout = () => {
  //sidebar
  const [isSidebar, setSidebar] = useState(false);


  return(
    <>
        <Header isSidebar={isSidebar} setSidebar={setSidebar}/>
        <Sidebar isSidebar={isSidebar} />
    </>
  );
}

export default PageLayout