import { useContext, useEffect, useState } from "react";
import { IStore, StoreContext } from "./dataContext";

export function useStore(): [
  IStore,
  (val: Partial<IStore>) => void
] {
  const store = useContext(StoreContext)
  if (!store) { throw new Error('[ERR][useStore][Store not Found]') }

  const [state, setState] = useState(store.get())

  useEffect(() => {
    return store.subscribe(() => setState(store.get()))
  }, [])

  return [state, store.set]
}
