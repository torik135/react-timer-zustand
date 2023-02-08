import { Box, Flex, HStack, Spacer, Text, Button } from "@chakra-ui/react"
import React, { memo, useEffect, useState } from "react"
import { useStore } from "../../context/useStore"
import { useProject } from "../../store/Project/useProject"
import { Status } from "../Status"
import {
  BtnStyles,
  HStackStyles,
  TimerFlexStyles,
  TimerInsideFlexStyles,
  TimerProjectTextStyles,
  TimerStatusBoxStyles,
  TimerTextStyles
} from "./styles"


const Timer: React.FC = memo(() => {
  const [store, setStore] = useStore()

  const [working, setWorking] = useState<boolean>(false)
  const [time, setTime] = useState<number>(0)

  const { getId, projectList } = useProject((state) => state)

  // function createClock() {
  //   const times: { hour: string, minute: string, second: string } = {
  //     hour: ("0" + Math.floor((time / 600000) % 60)).slice(-2),
  //     minute: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
  //     second: ("0" + Math.floor((time / 1000) % 60)).slice(-2)
  //   }
  //   return times
  // }

  // console.log(getProjectById(getId))
  function createClock() {
    const times: { hour: string, minute: string, second: string } = {
      hour: ("0" + Math.floor((time / 600000) % 60)).slice(-2),
      minute: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
      second: ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    }
    return times
  }


  useEffect(() => {
    let interval: number = 0

    if (working) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
        setStore({ ...store, working: working })
      }, 10)
    } else if (!working) {
      clearInterval(interval)
      setStore({
        ...store,
        working,
        time: time,
        statSec: createClock().second,
        statMin: createClock().minute,
        statHour: createClock().hour
      })
    }
    return () => clearInterval(interval)
  }, [working])

  // console.log(store)

  const startBtn = (
    <Button {...BtnStyles} onClick={() => setWorking(true)}>Paused</Button>
  )

  const stopBtn = (
    <Button {...BtnStyles} onClick={() => setWorking(false)}>Working</Button>
  )

  return (
    <Flex {...TimerFlexStyles}>
      <Flex {...TimerInsideFlexStyles}>
        {projectList.filter((proj) => proj.id === getId).map(p => (
          <>
            <Text {...TimerProjectTextStyles}>{p.title}</Text>
            <Spacer />
            <HStack {...HStackStyles}>
              <HStack>
                <Text {...TimerTextStyles}>
                  {/* <span>{createClock().hour} : </span> */}
                  {/* <span>{createClock().minute} : </span> */}
                  {/* <span>{createClock().second}</span> */}
                  <span>{p.timeHour} : </span>
                  <span>{p.timeMin} : </span>
                  <span>{p.timeSec}</span>
                </Text>
              </HStack>
              <HStack>
                {working ? stopBtn : startBtn}
              </HStack>
            </HStack>
          </>
        ))}
      </Flex>
      <Box {...TimerStatusBoxStyles}>
        <Status />
      </Box>
    </Flex>
  )
})

/**
* setTime to 0 after 00:01 at night.
* setTime to 0 after change task.
* save hour and minute in a state type of string.
* and show it in the Status.
* Status = total time after paused.
* 
* */

export { Timer }
