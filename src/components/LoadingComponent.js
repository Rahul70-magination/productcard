import React from 'react';
import {Modal} from 'antd';
import ReactLoading from "react-loading";


const LoadingComponent = () => {
    return (
        <>
            <div style={{

            }}> </div>
        <div style={{
                     opacity:"0.5",
                     position:"absolute",
                     top:"295px",
            
                    //  height:"100vh",
                    //  width:"100vw",
                     left:"530px"
        }}>
        <ReactLoading type="balls" color="black" height={100} width={100} />
 </div>
        </>
    );
   
}

export default LoadingComponent;
