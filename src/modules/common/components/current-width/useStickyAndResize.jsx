"use client"
import { useState, useEffect } from "react"

const useStickyAndResize = () => {
  const isClient = typeof window === "object";
  const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { windowWidth }
}

export default useStickyAndResize
