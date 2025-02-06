import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function MetricCard({ title, value, icon, className, trend }: MetricCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn(
            "mt-2 text-xs",
            trend.isPositive ? "text-green-600" : "text-red-600"
          )}>
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% from last period
          </p>
        )}
      </CardContent>
    </Card>
  );
}