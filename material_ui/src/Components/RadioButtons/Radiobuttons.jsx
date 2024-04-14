import { Radio } from "@mui/material";
import { useState } from "react";

const Radiobuttons=()=>{
    let [gender,setgender]=useState('male')
    function testfunc(e){
        console.log(e.target.value)
        setgender(e.target.value)
    }
    return(
        <>
        <h2>Radio buttons</h2>
        <label>male</label>
        <Radio value='male'
        checked={gender=='male'}
        onChange={testfunc}
        ></Radio>
        <label>female</label>
        <Radio value='female'
        checked={gender=='female'}
        onChange={testfunc}>
        </Radio>
        <label>other</label>
        <Radio value='other'
        checked={gender=='other'}
        onChange={testfunc}>
        </Radio>
        </>
    )
}
export default Radiobuttons;