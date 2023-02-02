import { Box, Flex, HStack, Spacer, Text, Button } from "@chakra-ui/react"
import React, { memo, useEffect, useState } from "react"
import { Status } from "../Status"
import { BtnStyles, HStackStyles, TimerFlexStyles, TimerInsideFlexStyles, TimerProjectTextStyles, TimerStatusBoxStyles, TimerTextStyles } from "./styles"


const Timer: React.FC = memo(() => {
  const [working, setWorking] = useState<boolean>(false)
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    let interval: number = 0

    if (working) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (!working) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [working])

  const startBtn = (
    <Button {...BtnStyles} onClick={() => setWorking(true)}>Paused</Button>
  )

  const stopBtn = (
    <Button {...BtnStyles} onClick={() => setWorking(false)}>Working</Button>
  )

  // function timeHour() {
  //   const t = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
  //   return t
  // }

  // function timeMinute() {
  //   const t = ("0" + Math.floor((time / 1000) & 60)).slice(-2)
  //   return t
  // }

  // function timeSecond() {
  //   const t = ("0" + ((time / 10) % 100)).slice(-2)
  //   return t
  // }


  return (
    <Flex {...TimerFlexStyles}>
      <Flex {...TimerInsideFlexStyles}>
        <Text {...TimerProjectTextStyles}>Project Name</Text>
        <Spacer />
        <HStack {...HStackStyles}>
          <HStack>
            <Text {...TimerTextStyles}>
              <span>{("0" + Math.floor((time / 600000) % 60)).slice(-2)} : </span>
              <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
              <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
              {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
              {/* <span>{timeHour()}</span> */}
              {/* <span>{timeMinute()}</span> */}
            </Text>
          </HStack>
          <HStack>
            {working ? stopBtn : startBtn}
          </HStack>
        </HStack>
      </Flex>
      <Box {...TimerStatusBoxStyles}>
        <Status />
      </Box>
    </Flex>
  )
})

/**
* setTime to 0 after 00 at night.
* setTime to 0 after change task.
* save hour and minute in a state type of string.
* and show it in the Status.
* */

export { Timer }
