import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useState } from "react";

const Checkboxs=()=>{
    const [datas,setdata]=useState([])
    const getdata=(e)=>{
       let data=datas
       data.push(e.target.value)
       console.log(data)
    }
    return(
        <>
        <h2>check box</h2>
        {/* onchange envent in check box */}
        <Checkbox value='arjun' onChange={getdata}></Checkbox>
        <Checkbox value='raki' onChange={getdata}></Checkbox>
        <Checkbox value='sharn' onChange={getdata}></Checkbox>
        {/* different check box */}
        <Checkbox indeterminate></Checkbox>
        {/* icon check box */}
        <Checkbox 
        color="secondary"
        icon={<FavoriteBorder/>}
        checkedIcon={<Favorite/>} 
         ></Checkbox>
        </>
    )
}
export default Checkboxs;