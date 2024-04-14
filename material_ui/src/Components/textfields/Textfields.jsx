import { TextField } from "@mui/material";
import { useState } from "react";

const Textfields=()=>{
   // let [text,settext]=useState
    function getevalue(e){
        console.log(e.target.value)
    }
    return(
        <>
        <h2>text fields</h2>
       <TextField
       label='eneter name'
       variant="outlined"
       type='text'
       onChange={getevalue}
       />
       <TextField
       label='eneter number'
       variant="filled"
       type='number'
       />
       <TextField
       label='eneter number'
       variant="standard"
       type='text'
       />
        </>
    )
}
export default Textfields;