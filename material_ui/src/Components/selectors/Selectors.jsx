import { Select,MenuItem } from "@mui/material";
import { useState } from "react";



const Selectors=()=>{
    let [course,setcourse]=useState('')
    let selectcours=(e,val)=>{
        console.log(e.target.value)
        setcourse(e.target.value)
    }
    return(
        <>
        <h2>selecotrs</h2>
        <Select
        value={course}
        displayEmpty
        onChange={selectcours}
        >
            <MenuItem value=''>select Course</MenuItem>
            <MenuItem value={1}>html        </MenuItem>
            <MenuItem value={2}>css         </MenuItem>
            <MenuItem value={3}>js          </MenuItem>
            <MenuItem value={4}>Bootstrap   </MenuItem>
            <MenuItem value={5}>react       </MenuItem>
        </Select>
        </>
    )
}
export default Selectors;