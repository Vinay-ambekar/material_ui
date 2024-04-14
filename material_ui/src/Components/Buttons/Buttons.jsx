import { Delete } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useState } from "react"

const Buttons=()=>{
  const [color,setcolor]=useState('secondary')
  const [disableBtn,setdisabledBtn]=useState(false)
/* disable function */
    const disablebtn=()=>{
      setdisabledBtn(true)
      }

/* color change function using useState */
    const colorChaneBtn=()=>{
      setcolor('primary')
      }

    return(
        <>
        <center>  
          <h2>button</h2>
      {/* disable the btn */}  
          <Button 
          color={color} 
          variant='outlined'
          disabled={disableBtn}
          onClick={disablebtn}>Button
          </Button>

      {/* change the btn color */}
          <Button 
          color={color} 
          variant='text'
          onClick={colorChaneBtn}>Button
          </Button>

{/* adding icon inside button */}
          <Button 
          color='primary' 
          variant='contained'
          startIcon={<Delete/>}
          >Button
          </Button>

          <Button 
          color='primary' 
          variant='contained'
          
          endIcon={<Delete/>}
          >Button
          </Button>
        </center>
        </>
    )
} 
export default Buttons;