import { ToastContextType } from "@/components/Toast/types/toastTypes";
import { createContext } from "react";

export const ToastContext = createContext<ToastContextType>({
  toastList: [],
  setToastList: () => {},
});
