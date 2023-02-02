import { createContext, ReactNode, useRef, useCallback } from "react"

export type IStore = {
  working: boolean
  time: number
  statSec: string
  statMin: string
  statHour: string
  projTitle: string
}

export function useStoreData(): {
  get: () => IStore
  set: (val: Partial<IStore>) => void
  subscribe: (callback: () => void) => () => void
} {
  const store = useRef({
    working: false,
    time: 0,
    statSec: "00",
    statMin: "00",
    statHour: "00",
    projTitle: "Project Name"
  })

  const get = useCallback(() => store.current, [])

  const subscribers = useRef(new Set<() => void>())

  const set = useCallback((val: Partial<IStore>) => {
    store.current = { ...store.current, ...val }
    subscribers.current.forEach((callback) => callback())
  }, [])

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback)
    return () => subscribers.current.delete(callback)
  }, [])

  return {
    get,
    set,
    subscribe,
  }
}

type UsetStoreReturnType = ReturnType<typeof useStoreData>

export const StoreContext = createContext<UsetStoreReturnType | null>(null)


function DataContext({ children }: { children: ReactNode }) {
  return (
    <StoreContext.Provider value={useStoreData()}>
      {children}
    </StoreContext.Provider>
  )
}

export { DataContext }
