import { FlexProps, ButtonProps, StackProps, TextProps, BoxProps } from "@chakra-ui/react"

export const TimerFlexStyles: FlexProps = {
  paddingBottom: "1rem",
  paddingTop: "1rem",
  width: "100%",
  direction: "column",
}

export const TimerInsideFlexStyles: FlexProps = {
  paddingEnd: "1rem",
}

export const BtnStyles: ButtonProps = {
  variant: "solid",
  minWidth: "5rem",
  maxWidth: "5.5rem",
}

export const HStackStyles: StackProps = {
  gap: "1rem",
}

export const TimerTextStyles: TextProps = {
  minWidth: "10rem",
  border: "1px solid white",
  padding: ".5rem",
  fontWeight: "bolder",
}

export const TimerProjectTextStyles: TextProps = {
  border: "1px solid white",
  padding: ".5rem",
}

export const TimerStatusBoxStyles: BoxProps = {
  padding: ".5rem",
  borderRadius: "7px",
  marginTop: "1rem",
  bg: "gold",
  height: "40px",
  transform: "translateY(10px)",
}
