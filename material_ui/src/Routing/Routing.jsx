import React from "react"
import { Routes,Route } from "react-router-dom"
import Buttons from "../Components/Buttons/Buttons"
import Buttongroup from "../Components/ButtonGroups/Buttongroup"
import Checkboxs from "../Components/Checkbox/Checkbox"
import Radiobuttons from "../Components/RadioButtons/Radiobuttons"


const Routing=()=>{
    return(
        <>
        <Routes>
            <Route path='/button' element={<Buttons/>} />
            <Route path='/buttonGroups' element={<Buttongroup/>} />
            <Route path='/checkbox' element={<Checkboxs/>} />
            <Route path='/radiobutton' element={<Radiobuttons/>} />
            
        </Routes>
        </>
    )
}
export default Routing;