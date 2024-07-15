// Shadcn Component
import { cn } from "@/lib/utils";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Card as ShadcnCard } from "../ui/card";
// Type
import type { CardProps } from "./Card.types";

export default function Card({ children, description, footer, title }: CardProps) {
  return (
    <ShadcnCard>
      {title && (
        <CardHeader className="p-4 px-6">
          <CardTitle className="text-lg">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn("p-4 px-6", title ? "pt-0" : "pt-4")}>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </ShadcnCard>
  );
}
