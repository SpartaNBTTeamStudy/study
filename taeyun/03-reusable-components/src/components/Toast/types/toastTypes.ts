export interface ToastType {
  id: string;
  type: ToastMapKey;
  title: string;
  message: string;
}

export interface ToastContextType {
  toastList: Array<ToastType>;
  setToastList: React.Dispatch<React.SetStateAction<Array<ToastType>>>;
}

export type ToastMapKey = "success" | "error" | "warning";

export type ToastMapType = {
  [key in ToastMapKey]: {
    color: string;
    icon_path: string;
  };
};
