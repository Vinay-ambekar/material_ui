import React from "react"
import { Routes,Route } from "react-router-dom"
import Buttons from "../Components/Buttons/Buttons"
import Buttongroup from "../Components/ButtonGroups/Buttongroup"
import Checkboxs from "../Components/Checkbox/Checkbox"
import Radiobuttons from "../Components/RadioButtons/Radiobuttons"
import Sliders from "../Components/Slider/Sliders"
import Selectors from "../Components/selectors/Selectors"
import Textfields from "../Components/textfields/Textfields"
import Switchs from "../Components/switchs/Switchs"
import Box_layout from "../Components/box_and_layout/Box_layout"
import Containers from "../Components/container/Containers"
import Grids from "../Components/grid/Grids"


const Routing=()=>{
    return(
        <>
        <Routes>
            <Route path='/button' element={<Buttons/>} />
            <Route path='/buttonGroups' element={<Buttongroup/>} />
            <Route path='/checkbox' element={<Checkboxs/>} />
            <Route path='/radiobutton' element={<Radiobuttons/>} />
            <Route path='/slider' element={<Sliders/>} />
            <Route path='/selector' element={<Selectors/>} />
            <Route path='/textfield' element={<Textfields/>} />
            <Route path='/switch' element={<Switchs/>} />
            <Route path='/boxlayout' element={<Box_layout/>} />
            <Route path='/container' element={<Containers/>} />
            <Route path='/grid' element={<Grids/>} />
        </Routes>
        </>
    )
}
export default Routing;