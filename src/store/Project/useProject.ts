import { create } from "zustand"
// import { devtools } from "zustand/middleware"

export type ProjectType = {
  id: number,
  title: string,
  timeHour: string,
  timeMin: string,
  timeSec: string,
}

export type StoreType = {
  projectList: ProjectType[],
  getProject: (url: string) => void,
  getProjectById: (id: number) => void,
  addProject: (title: string, timeHour: string, timeMin: string, timeSec: string) => void,

  getId: number,
  setId: (id: number) => void,
  updateTime: (id: number, timeHour: string, timeMin: string, timeSec: string) => void,
}

export const useProject = create<StoreType>((set) => ({
  // projectList can be empty list.
  projectList: [
    { id: 1, title: "Make API", timeHour: "01", timeMin: "01", timeSec: "01" },
    { id: 2, title: "Make DB", timeHour: "02", timeMin: "02", timeSec: "02" },
    { id: 3, title: "Make FE", timeHour: "03", timeMin: "03", timeSec: "03" },
    { id: 4, title: "Make BE", timeHour: "04", timeMin: "04", timeSec: "04" },
  ],

  // getProject can be use axios if fetching from api.
  getProject: async (url: string) => {
    const resp = await fetch(url)
    set({ projectList: await resp.json() })
  },

  // getProjectById used for display and updating one data.
  getProjectById: (id: number) => {
    set((state) => ({
      projectList: state.projectList.filter(proj => proj.id === id)
    }))
  },

  // if using CRUD func.
  addProject: (title: string, timeHour: string, timeMin: string, timeSec: string) => {
    set((state) => ({
      projectList: [
        {
          id: Math.max(0, Math.max(...state.projectList.map(({ id }: { id: number }) => id))) + 1,
          title,
          timeHour,
          timeMin,
          timeSec,
        },
        ...state.projectList
      ]
    }))
  },

  // #2 option for getProjectById
  // but only return id type number.
  getId: 0,
  setId: (id: number) => {
    set({ getId: id })
  },

  // updating selected project time.
  updateTime: (id: number, timeHour: string, timeMin: string, timeSec: string) => {
    set((state) => ({
      projectList: state.projectList.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            timeHour,
            timeMin,
            timeSec
          }
        } else { return p }
      })
    }))
  }
}))
