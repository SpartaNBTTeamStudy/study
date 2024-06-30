import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

const buttonVariant = cva(
  "border-4 rounded-md hover:brightness-90 active:brightness-75 transition",
  {
    variants: {
      intent: {
        primary: "bg-sky-500",
        danger: "bg-red-500",
        secondary: "bg-slate-500",
        warning: "bg-yellow-500",
        info: "bg-cyan-500",
      },
      size: {
        sm: "px-2 py-1 text-[14px]",
        md: "px-4 py-2 text-[16px]",
        lg: "px-6 py-4 text-[18px]",
      },
      variant: {
        outline: "bg-white",
        contained: "text-white",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "contained",
        className: "bg-sky-500",
      },
      {
        intent: "primary",
        variant: "outline",
        className: "text-sky-500",
      },
      {
        intent: "danger",
        variant: "contained",
        className: "bg-red-500",
      },
      {
        intent: "danger",
        variant: "outline",
        className: "text-red-500",
      },
      {
        intent: "secondary",
        variant: "contained",
        className: "bg-slate-500",
      },
      {
        intent: "secondary",
        variant: "outline",
        className: "text-slate-500",
      },
      {
        intent: "warning",
        variant: "contained",
        className: "bg-yellow-500",
      },
      {
        intent: "warning",
        variant: "outline",
        className: "text-yellow-500",
      },
      {
        intent: "info",
        variant: "contained",
        className: "bg-cyan-500",
      },
      {
        intent: "info",
        variant: "outline",
        className: "text-cyan-500",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

type ButtonVariant = VariantProps<typeof buttonVariant>;

type ButtonProps = {
  text: string;
} & ButtonVariant &
  ComponentProps<"button">;

const Button = ({
  intent,
  size,
  text,
  variant,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={buttonVariant({ intent, size, variant })} {...props}>
      {text}
    </button>
  );
};

export default Button;
