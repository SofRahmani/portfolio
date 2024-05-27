import { cn } from "@/lib/utils";

export interface LengthMessageProps {
  limite: number;
  message: number;
}

export default function LengthMessage({ limite, message }: LengthMessageProps) {
  return (
    <div className="relative flex w-28 justify-end max-sm:hidden">
      <p className="text-sm">
        <span
          className={cn({
            "text-red-400": message > limite
          })}
        >
          {message}
        </span>{" "}
        / {limite}
      </p>
    </div>
  );
}
