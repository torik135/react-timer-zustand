import { IProject } from "./type";

export const getProject = (projects: IProject[]): IProject[] => [...projects]

export const getProjId = (projects: IProject[], id: number): IProject | IProject[] =>
  projects.map((proj) => ({
    ...proj,
    id: proj.id === id ? id : proj.id
  }))

export const changeTimeH = (projects: IProject[], id: number, timeHour: string): IProject[] =>
  projects.map((proj) => ({
    ...proj,
    timeHour: proj.id === id ? timeHour : proj.timeHour
  }))

export const changeTimeM = (projects: IProject[], id: number, timeMin: string): IProject[] =>
  projects.map((proj) => ({
    ...proj,
    timeMin: proj.id === id ? timeMin : proj.timeMin
  }))

export const changeTimeS = (projects: IProject[], id: number, timeSec: string): IProject[] =>
  projects.map((proj) => ({
    ...proj,
    timeSec: proj.id === id ? timeSec : proj.timeSec
  }))
