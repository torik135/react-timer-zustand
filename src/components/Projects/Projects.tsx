import { Box, Flex, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import {
  ProjectFlexStyles,
  ProjectItemFlexStyles,
  ProjectListStyles,
  ProjectTextStyles
} from "./styles";

import { useProject } from "../../store/Project/useProject";


const Projects: React.FC = memo(() => {

  const { projectList, getId, setId } = useProject((state) => state)

  console.log(getId)

  return (
    <Flex {...ProjectFlexStyles}>
      <Text {...ProjectTextStyles}>Pick your Task: </Text>
      <Box {...ProjectListStyles}>
        {projectList.map((project) => (
          <Flex
            {...ProjectItemFlexStyles}
            fontWeight={project.id === getId ? "bolder" : ""}
            key={Math.random()} onClick={() => setId(project.id)}
          >
            <Box>{project.title}</Box>
            <Text>
              {project.timeHour} : {project.timeMin} : {project.timeSec}
            </Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  )
})

/**
* save H, M, S into diff state.
* add it with prev state new H,M,S + Old H,M,S (turn type into int).
* and display it in Timer using context.
* update (onChange) the time based in the radio value.
* */

export { Projects }
