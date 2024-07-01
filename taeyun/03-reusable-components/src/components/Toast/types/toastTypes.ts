export interface ToastType {
  id: string;
  type: ToastMapKey;
  title: string;
  message: string;
}

export interface ToastContextType {
  toastList: ToastType[];
  setToastList: React.Dispatch<React.SetStateAction<ToastType[]>>;
}

export type ToastMapKey = "success" | "error" | "warning";

export type ToastMapType = {
  [key in ToastMapKey]: {
    color: string;
    icon_path: string;
  };
};
