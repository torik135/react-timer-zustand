import { Flex, Box } from "@chakra-ui/react"
import React, { useEffect, useState, memo } from "react"
import { DateBoxStyles, DateFlexStyles, TimeBoxStyles } from "./styles"

const DateTime: React.FC = memo(() => {
  const [time, setTime] = useState<string>("")
  const [date, setDate] = useState<string>("")

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
      setDate(new Date().toDateString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Flex {...DateFlexStyles}>
      <Box {...DateBoxStyles}>{date}</Box>
      <Box {...TimeBoxStyles}>{time}</Box>
    </Flex>

  )
})

export { DateTime }
