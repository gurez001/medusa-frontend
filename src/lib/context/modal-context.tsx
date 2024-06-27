"use client"

import React, { createContext, useContext, useState } from "react"

interface ModalContext {
  // close: () => void
  number: number | null;
  currentIndex: (index: number) => void;
}

const ModalContext = createContext<ModalContext | null>(null)

interface ModalProviderProps {
  children?: React.ReactNode
  close: () => void
}

 const ModalProvider = ({ children }: ModalProviderProps) => {
  const [number, setNumber] = useState<number | null>(null);

  const currentIndex = (index: number) => {
    setNumber((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <ModalContext.Provider
      value={{
        // close,
        number,
        currentIndex,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

function useModal()  {
  const context = useContext(ModalContext)
  if (context === null) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
export {
  useModal,ModalProvider
}