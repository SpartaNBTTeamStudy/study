import { ToastContextType } from "@/components/Toast/types";
import { createContext } from "react";

export const ToastContext = createContext<ToastContextType>({
  toastList: [],
  setToastList: () => {},
});
