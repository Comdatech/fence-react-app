//import local assets

//import local components
import Header from "./header";
import Sidebar from "./sidebar";

//import external libraries and assets
import React, { useState, useRef} from "react";


const PageLayout = () => {
  //sidebar
  const [isSidebar, setSidebar] = useState(false);

  //this is used to get the width of the sidebar
  //width of sidebar is used to determine the margin-left of the page content
  const ref = useRef(null);
  const [width, setWidth] = useState(0);


  return(
    <>
        <Header isSidebar={isSidebar} setSidebar={setSidebar}/>
        <Sidebar isSidebar={isSidebar}  ref={ref} width={width} setWidth={setWidth}/>
    </>
  );
}

export default PageLayout