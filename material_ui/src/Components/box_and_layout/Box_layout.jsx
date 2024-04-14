import { Box, Button,ThemeProvider } from "@mui/material";

 function Box_layout(){
    return(
        <>
        <h2>box and layout</h2>
        <Box component='span' sx={{border:'1px solid red',p:1}} >
            <Button  >click me</Button>
        </Box>
        <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
    </Box>

    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
        </>
    )
}
export default Box_layout;