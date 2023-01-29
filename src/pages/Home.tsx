import { VStack } from "@chakra-ui/react"
import React, { memo } from "react"
import { Container } from "react-bootstrap"
import { Status, Timer, Projects } from "../components"

const Home: React.FC = memo(() => {
  return (
    <Container>
      <VStack>
        <Timer />
        <Status />
      </VStack>
      <Projects />
    </Container>
  )
})

export { Home }
