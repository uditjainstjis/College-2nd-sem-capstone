import { cn } from "@/lib/utils"
import * as React from "react"

export const Textarea = (
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black",
        className
      )}
      {...props}
    />
  )
)

Textarea.displayName = "Textarea"
