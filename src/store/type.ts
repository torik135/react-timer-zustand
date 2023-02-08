export type IConstant = {
  working: boolean
  time: number
}

export type IProject = {
  id: number,
  title: string,
  desc: string,
  timeHour: string,
  timeMin: string,
  timeSec: string,
}

export type Store = {
  // PROJECT LIST
  projects: IProject[],
  setProject: (projects: IProject[]) => void,

  // PROJECT ID
  projId: number,
  setProjId: (id: number) => void,

  // PROJECT TITLE
  projTitle: string,
  setProjTitle: (title: string) => void,

  // TIME
  hour: string,
  minute: string,
  second: string,
  setHour: (h: string) => void,
  setMin: (m: string) => void,
  setSec: (s: string) => void,
}

export const DDATA: IProject[] = [
  {
    id: 1,
    title: "Make API",
    desc: "Desc API",
    timeHour: "01",
    timeMin: "01",
    timeSec: "01",
  },
  {
    id: 2,
    title: "Make Backend",
    desc: "Desc Backend",
    timeHour: "02",
    timeMin: "02",
    timeSec: "02",
  },
  {
    id: 3,
    title: "Make Frontend",
    desc: "Desc Frontend",
    timeHour: "03",
    timeMin: "03",
    timeSec: "03",
  },
  {
    id: 4,
    title: "Make DB",
    desc: "Desc DB",
    timeHour: "04",
    timeMin: "04",
    timeSec: "04",
  },
]
