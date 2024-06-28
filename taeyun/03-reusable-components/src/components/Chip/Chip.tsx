import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg border-4 border-white inline-flex px-4 py-2 hover:opacity-50 transition-opacity cursor-pointer",
  {
    variants: {
      intent: {
        primary: "bg-blue-300 text-blue-900",
        danger: "bg-red-300 text-red-900",
        secondary: "bg-gray-300 text-gray-900",
        warning: "bg-yellow-300 text-yellow-900",
        info: "bg-cyan-300 text-cyan-900",
        default: "bg-black-300 text-white",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

type ButtonVariant = VariantProps<typeof buttonVariants>;

type ChipProps = {
  text: string;
} & ButtonVariant;

const Chip = ({ intent, text, ...props }: ChipProps) => {
  return (
    <div className={buttonVariants({ intent })} {...props}>
      <span>{text}</span>
    </div>
  );
};

export default Chip;
