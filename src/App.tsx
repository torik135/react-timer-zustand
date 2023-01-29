import { Box } from "@chakra-ui/react";
import React, { memo } from "react";
import { Home } from "./pages";


const App: React.FC = memo(() => {
  return (
    <Box bg="gold" minW="100vw" minH="100vh" alignItems="center" justifyItems="center">
      <Home />
    </Box>
  );
})

export default App;
