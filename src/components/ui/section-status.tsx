import * as React from "react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { CheckCircle2, Circle } from "lucide-react";

interface SectionStatusProps {
  isComplete: boolean;
  className?: string;
}

export const SectionStatus = React.forwardRef<
  HTMLSpanElement,
  SectionStatusProps
>(({ isComplete, className }, ref) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          ref={ref}
          className={cn("inline-flex items-center justify-center", className)}
          role="status"
          aria-label={isComplete ? "Complete" : "Incomplete"}
        >
          {isComplete ? (
            <CheckCircle2 size={14} className="text-green-500" />
          ) : (
            <Circle size={14} className="text-amber-500/70 stroke-[2.5]" />
          )}
        </span>
      </TooltipTrigger>
      <TooltipContent>{isComplete ? "Complete" : "Incomplete"}</TooltipContent>
    </Tooltip>
  );
});

SectionStatus.displayName = "SectionStatus";
