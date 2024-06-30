import { ToastContext } from "@/store/contexts/ToastContext";
import React, { useContext, useEffect, useState } from "react";
import { ToastType } from "./types/toastTypes";
import { toastMap } from "./types/constants";
import "./Toast.css";
import ToastUi from "./ToastUi";

const Toast = () => {
  const { toastList, setToastList } = useContext(ToastContext);
  const [list, setList] = useState<ToastType[]>([]);
  console.log(toastList);
  console.log(list);

  const deleteToast = (id: string) => {
    const newList = list.filter((toast) => toast.id !== id);
    setToastList([...newList]);
  };

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  // 3초후 토스트 제거
  useEffect(() => {
    const times = setTimeout(() => {
      if (list.length && toastList.length) {
        if (toastList[0].id) deleteToast(toastList[0].id);
      }
    }, 3000);
    return () => clearTimeout(times);
  }, [list, toastList]);

  // 토스트UI 가져온곳 : https://flowbite.com/docs/components/toast/
  return (
    <div>
      {list.map((item) => (
        <ToastUi key={item.id} item={item} deleteToast={deleteToast} />
      ))}
    </div>
  );
};

export default Toast;
