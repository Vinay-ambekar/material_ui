import { Container } from "@mui/material";

function Containers(){
    return(
        <>
        <h2>container</h2>
<Container maxWidth='xs'>
    <h2   style={{backgroundColor:'green'}}>this is container</h2>
</Container>
<Container maxWidth='sm'>
    <h2   style={{backgroundColor:'green'}}>this is container</h2>
</Container>
<Container maxWidth='md'>
    <h2   style={{backgroundColor:'green'}}>this is container</h2>
</Container>
<Container maxWidth='lg'>
    <h2   style={{backgroundColor:'green'}}>this is container</h2>
</Container>
<Container fixed>
    <h2   style={{backgroundColor:'green'}}>this is container fixed</h2>
</Container>
        </>
    )
}
export default Containers;