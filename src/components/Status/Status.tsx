import { Box, Text } from "@chakra-ui/react";
import React, { memo } from "react";

type IStatus = {
  hour: string,
  minute: string,
}

const Status: React.FC<IStatus> = memo(({ hour = 0, minute = 0 }) => {
  return (
    <Box>
      <Text>{hour} hour {minute} minute Worked Today.</Text>
    </Box>
  )
})

export { Status }
