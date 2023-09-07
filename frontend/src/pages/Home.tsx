import { Box, CssBaseline } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          display: "flex",
        }}
      >
        <CssBaseline />
        Home
      </Box>
    </>
  );
};

export default Home;
