import { Flex, HStack, Spacer, Text, Button } from "@chakra-ui/react"
import React, { memo, useEffect, useState } from "react"
import { BtnStyles, HStackStyles, TimerFlexStyles, TimerTextStyles } from "./styles"


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


  return (
    <Flex {...TimerFlexStyles}>
      <Text>Project Name</Text>
      <Spacer />
      <HStack {...HStackStyles}>
        {/* <Text>00:00:00</Text> */}
        {/* <Button onClick={() => setWotking(prev => !prev)}>{working ? "Working" : "Paused"}</Button> */}
        <HStack>
          <Text {...TimerTextStyles}>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </Text>
        </HStack>
        <HStack>
          {working ? stopBtn : startBtn}
        </HStack>
      </HStack>
    </Flex>
  )
})

/**
* setTime to 0 after 00 at night.
* setTime to 0 after change task.
* */

export { Timer }
