import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: 'John', performance: 92 },
  { name: 'Sarah', performance: 88 },
  { name: 'Mike', performance: 95 },
  { name: 'Lisa', performance: 85 },
  { name: 'David', performance: 90 },
];

export function AgentPerformance() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Agent Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="performance" fill="#1e40af" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}