"use client";

import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Toast from "@/components/Toast";
import { ToastMapKey, ToastType } from "@/components/Toast/types/toastTypes";
import { ToastContext } from "@/store/contexts/ToastContext";
import { useContext } from "react";

export default function Home() {
  const { toastList, setToastList } = useContext(ToastContext);

  const createToast = (type: ToastMapKey) => {
    const newToast: ToastType = {
      id: Date.now().toString(),
      type: type,
      title: `${type} 제목`,
      message: `${type} 메세지`,
    };
    setToastList([...toastList, newToast]);
    console.log(`${type} 생성!`);
  };
  return (
    <div>
      <h2>Chip 컴포넌트</h2>
      <Chip intent="primary" text="Primary" id="123" />
      <Chip intent="danger" text="Danger" id="234" />
      <Chip
        intent="secondary"
        text="Secondary"
        onClick={() => alert("Secondary")}
      />
      <Chip intent="warning" text="Warning" />
      <Chip intent="info" text="Info" />
      <Chip intent="default" text="Default" />

      <div className="my-5">
        <hr />
      </div>

      {/* 버튼 컴포넌트 */}
      <h2>Button 컴포넌트</h2>
      <Button text="그냥 기본 버튼" />
      <Button
        intent="primary"
        text="Primary"
        size="sm"
        onClick={() => alert("Primary 버튼")}
      />
      <Button intent="primary" text="Primary" size="sm" variant="outline" />

      <Button intent="danger" text="Danger" size="md" />
      <Button intent="danger" text="Danger" size="md" variant="outline" />

      <Button intent="secondary" text="Secondary" size="lg" />
      <Button intent="secondary" text="Secondary" size="lg" variant="outline" />

      {/* warning버튼 아웃라인 오류  */}
      <Button intent="warning" text="Warning" size="sm" />
      <Button intent="warning" text="Warning" size="sm" variant="outline" />

      <Button intent="info" text="Info" size="lg" />
      <Button intent="info" text="Info" size="lg" variant="outline" />

      <div className="my-5">
        <hr />
      </div>

      <h2>ContextAPI 토스트</h2>

      <Toast />
      <Button
        intent="primary"
        text="success 토스트"
        size="sm"
        onClick={() => createToast("success")}
      />
      <Button
        intent="danger"
        text="error 토스트"
        size="sm"
        onClick={() => createToast("error")}
      />
      <Button
        intent="warning"
        text="warning 토스트"
        size="sm"
        onClick={() => createToast("warning")}
      />
    </div>
  );
}
