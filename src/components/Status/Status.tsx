import { Box, Text } from "@chakra-ui/react";
import React, { memo } from "react";

const Status: React.FC = memo(() => {

  return (
    <Box>
      <Text>You Worked <b>00 hour(s) 00 minute(s) 00 seconds</b> Today.</Text>
    </Box>
  )
})

/**
* update time using store value
* */

export { Status }
