import { Box } from "@chakra-ui/react"
import React, { memo } from "react"
import { Timer, Projects, DateTime, Records } from "../../components"
import { CompBoxStyles, HomeBoxStyles } from "./styles"

const Home: React.FC = memo(() => {
  return (
    <Box {...HomeBoxStyles}>
      <Box {...CompBoxStyles}>
        <DateTime />
      </Box>
      <Box {...CompBoxStyles}>
        <Timer />
      </Box>

      <Box {...CompBoxStyles}>
        <Projects />
      </Box>
      <Box {...CompBoxStyles}>
        <Records />
      </Box>
    </Box>
  )
})

export { Home }
