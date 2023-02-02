import { Box, Flex, Radio, RadioGroup, Text, useRadioGroup } from "@chakra-ui/react";
import React, { memo, useEffect, useRef } from "react";
import { useStore } from "../../context/useStore";
import {
  ProjectFlexStyles,
  ProjectItemRadioStyles,
  ProjectItemFlexStyles,
  ProjectListStyles,
  ProjectTextStyles
} from "./styles";


type IProj = {
  id: number,
  title: string,
  time: string,
}

const projects: IProj[] = [
  { id: 1, title: "Make Backend", time: "00:00:00" },
  { id: 2, title: "Make Frontend", time: "00:00:00" },
  { id: 3, title: "Make API", time: "00:00:00" },
  { id: 4, title: "Make Database", time: "00:00:00" },
]

const Projects: React.FC = memo(() => {
  const [store, setStore] = useStore()

  const { value, getRadioProps, getRootProps } = useRadioGroup()

  useEffect(() => {
    setStore({ ...store, projTitle: value })
  }, [value])

  return (
    <Flex {...ProjectFlexStyles} {...getRootProps}>
      <Text {...ProjectTextStyles}>Pick your project : {store.projTitle}</Text>
      <RadioGroup>
        <Box {...ProjectListStyles}>
          {projects.map(project => (
            <Flex {...ProjectItemFlexStyles} key={`${Math.random()}_${project.id}`} >
              <Radio
                {...ProjectItemRadioStyles}
                value={project.title}
                {...getRadioProps({ value: project.title })}
              >
                <Text fontWeight="bolder">{project.title}</Text>
              </Radio>
              <Text>{project.time}</Text>
            </Flex>
          ))}
        </Box>
      </RadioGroup>
    </Flex >
  )
})

/**
* save H, M, S into diff state.
* add it with prev state new H,M,S + Old H,M,S (turn type into int).
* and display it in Timer using context.
* */

export { Projects }
