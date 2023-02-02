import { Box } from "@chakra-ui/react";
import React, { memo } from "react";
import { StoreContext, useStoreData } from "./context/dataContext";
import { Home } from "./pages";


const App: React.FC = memo(() => {
  return (
    <StoreContext.Provider value={useStoreData()}>
      <Box bg="gold" minW="100vw" minH="100vh" alignItems="center" justifyItems="center">
        <Home />
      </Box>
    </StoreContext.Provider>
  );
})

export default App;
