import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, disabled, type = "button", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={twMerge(
        "bg-green-500 text-black rounded-full w-full px-3 py-3 border border-transparent disabled:cursor-not-allowed disabled:opacity-50  font-bold  hover:opacity-75 transition",
        className
      )}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";
export default Button;
