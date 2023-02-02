import { BoxProps, FlexProps, RadioProps, TextProps } from "@chakra-ui/react";

export const ProjectFlexStyles: FlexProps = {
  direction: "column",
}

export const ProjectTextStyles: TextProps = {
  fontWeight: "bolder",
  marginBottom: "2rem",
}

export const ProjectListStyles: BoxProps = {
  alignContent: "center",
  width: "100%",
}

export const ProjectItemRadioStyles: RadioProps = {
  padding: ".5rem",
  borderRadius: "7px",
}

export const ProjectItemFlexStyles: FlexProps = {
  padding: ".5rem",
  bg: "gold",
  borderRadius: "7px",
  marginBottom: ".5rem",
  justifyContent: "space-between",
  alignItems: "center",
}

