import { Box } from "@chakra-ui/react"
import React, { memo } from "react"
import { Status, Timer, Projects } from "../../components"
import { CompBoxStyles, HomeBoxStyles } from "./styles"

const Home: React.FC = memo(() => {
  return (
    <Box {...HomeBoxStyles}>
      <Box {...CompBoxStyles}>
        <Timer />
      </Box>
      <Box {...CompBoxStyles}>
        <Status />
      </Box>
      <Box {...CompBoxStyles}>
        <Projects />
      </Box>
    </Box>
  )
})

export { Home }
