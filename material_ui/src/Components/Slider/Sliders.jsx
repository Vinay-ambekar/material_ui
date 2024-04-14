
import { Slider } from "@mui/material";
const mark=[
    {value:0,label:'start'},
    {value:200,label:'end'},
    {value:100,label:'middle'},
    {value:50,label:'custom'}
]
function sliders(e){
    console.log(e.target.value)
}
function getvalue(e,val){
    console.log(val)
}
function Sliders(){
    return(
        <>
        <h2>slider</h2>
        <div style={{width:'400px'}}>
        <Slider
        max={200}/* max value is 200 */
        defaultValue={100}/* default set to 100 */
        step={5}/* what are the label is there it give 5 distance between them */
        marks={mark}/* marks is key word we can set the value with name */
        valueLabelDisplay="auto"/* display the value */
        onChange={sliders}
        />
        </div>
        <div style={{height:'400px',paddingTop:'50px'}}>
            {/* vertical */}
            <h3>vertical slider</h3>
        <Slider
        max={200}/* max value is 200 */
        defaultValue={100}/* default set to 100 */
        step={5}/* what are the label is there it give 5 distance between them */
        marks={mark}/* marks is key word we can set the value with name */
        valueLabelDisplay="auto"/* display the value */
        onChange={getvalue}
        orientation="vertical"
        />
        </div>
     
        </>
    )
}
export default Sliders;