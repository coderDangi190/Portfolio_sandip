import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ className, variant = "primary", ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium transition",
        "focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:ring-offset-0",
        variant === "primary" &&
          "bg-emerald-600/90 text-white hover:bg-emerald-600 shadow-[0_0_0_1px_rgba(16,185,129,0.25),0_12px_30px_rgba(16,185,129,0.15)]",
        variant === "ghost" &&
          "bg-white/5 text-white hover:bg-white/10 border border-white/10",
        className
      )}
      {...props}
    />
  );
}
