import { Box, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { useStore } from "../../context/useStore";


const Status: React.FC = memo(() => {
  const [store] = useStore()

  return (
    <Box>
      <Text>You Worked <b>{store.statHour} hour(s) {store.statMin} minute(s) {store.statSec} seconds</b> Today.</Text>
    </Box>
  )
})

export { Status }
