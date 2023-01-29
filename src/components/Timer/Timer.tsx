import { Box } from "@chakra-ui/react"
import React, { memo } from "react"

function createTimer() {
  const startTime = Date.now()
  return () => {
    return Math.round((Date.now() - startTime) / 1000)
  }
}

const Timer: React.FC = memo(() => {
  return <Box>TImer</Box>
})

export { Timer }
