import React, { memo } from "react"

function createTimer() {
  const startTime = Date.now()
  return () => {
    return Math.round((Date.now() - startTime) / 1000)
  }
}

const Timer: React.FC = memo(() => {
  return <>TImer</>
})

export { Timer }
