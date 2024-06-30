"use client";
import { useState } from "react";
import { ToastContext } from "../contexts/ToastContext";
import { ToastType } from "@/components/Toast/types";

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toastList, setToastList] = useState<Array<ToastType>>([]);
  const value = {
    toastList,
    setToastList,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export default ToastProvider;
