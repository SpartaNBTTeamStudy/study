import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg border-4 border-white text-white inline-flex px-4 py-2",
  {
    variants: {
      intent: {
        primary: ["bg-blue-300"],
        danger: "bg-red-300",
        secondary: "bg-gray-300",
        warning: "bg-yellow-300",
        info: "bg-cyan-300",
        default: "bg-black-300",
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

// Next.js + SupaBase + TanStackQuery + Todo
