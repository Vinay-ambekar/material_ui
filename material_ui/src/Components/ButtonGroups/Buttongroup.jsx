import { Button,ButtonGroup } from "@mui/material";
const Buttongroup=()=>{
    return(
        <>
        <h1>buttngroup</h1>
        <ButtonGroup orientation="horizontal">
            <Button>one</Button>
            <Button>two</Button>
            <Button>three</Button>
        </ButtonGroup>
        <ButtonGroup orientation="vertical">
            <Button>one</Button>
            <Button>two</Button>
            <Button>three</Button>
        </ButtonGroup>
        </>
    )
}
export default Buttongroup;