import { Box, CssBaseline } from "@mui/material";
import PrimaryAppBar from "./templates/PrimaryAppBar";
import PrimaryDrawer from "./templates/PrimaryDrawer";
import SecondaryDrawer from "./templates/SecondaryDraw";

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
        <SecondaryDrawer></SecondaryDrawer>
        Home
      </Box>
    </>
  );
};

export default Home;
