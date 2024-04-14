import { Switch } from "@mui/material";

const Switchs=()=>{
    function getvalue(e,val){
        console.log(val)/* we get true and false */
    }
return(
    <>
    <h2>switches</h2>
    <Switch onChange={getvalue}/>
    </>
)
}
export default Switchs;
