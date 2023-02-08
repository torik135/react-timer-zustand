// import { useRef } from "react"
import { create } from "zustand"
import { Store, DDATA } from './type'

export const fetchData = async () => {
  const res = await fetch('/project.json').then((r) => r.json())
  return res
}


export const useStore = create<Store>((set) => ({
  // PROJECT LIST
  projects: DDATA,

  // PROJECT ID
  projId: 0,
  setProjId(id: number) {
    set((state) => ({
      ...state,
      projId: id
    }))
  },

  // PROJECT TITLE
  projTitle: "Project Title",
  setProjTitle(title: string) {
    set(() => ({
      projTitle: title
    }))
  },

  // TIME
  hour: "0",
  minute: "0",
  second: "0",
  setHour(h: string) {
    set((state) => ({
      ...state,
      hour: h,
    }))
  },
  setMin(m: string) {
    set((state) => ({
      ...state,
      minute: m,
    }))
  },
  setSec(s: string) {
    set((state) => ({
      ...state,
      second: s,
    }))
  }
}))
