import { Flex, Box, Text } from "@chakra-ui/react"
import React, { useEffect, useState, memo } from "react"
import { DateBoxStyles, DateFlexStyles, TimeFlexStyles, TimeTextStyles } from "./styles"

const DateTime: React.FC = memo(() => {
  const [time, setTime] = useState<string>("")
  const [date, setDate] = useState<string>("")

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString(["id"]))
      setDate(new Date().toLocaleDateString(
        ["id", "ID"],
        { day: "numeric", weekday: "long", month: "long", year: "numeric" }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Flex {...DateFlexStyles}>
      <Box {...DateBoxStyles}>{date}</Box>
      <Flex {...TimeFlexStyles}>
        <Text>Jam : </Text>
        <Text {...TimeTextStyles}> {time}</Text>
      </Flex>
    </Flex>

  )
})

export { DateTime }
