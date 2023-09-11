import { Box, CssBaseline } from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";
import PrimaryDrawer from "./templates/PrimaryDrawer";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <PrimaryAppBar />
        <PrimaryDrawer></PrimaryDrawer>
        Home
      </Box>
    </>
  );
};

export default Home;
