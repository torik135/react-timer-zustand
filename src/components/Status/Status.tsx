import { Box, Text } from "@chakra-ui/react";
import React, { memo } from "react";

const Status: React.FC = memo(() => {
  return (
    <Box>
      <Text>[hours]-[minutes] hours Worked Today.</Text>
    </Box>
  )
})

export { Status }
