import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface MetricData {
  date: string;
  missedCalls: number;
  newClients: number;
  availability: number;
}

interface AgentMetricsChartProps {
  data: MetricData[];
}

export function AgentMetricsChart({ data }: AgentMetricsChartProps) {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="missedCalls" stroke="#ef4444" name="Missed Calls" />
          <Line type="monotone" dataKey="newClients" stroke="#22c55e" name="New Clients" />
          <Line type="monotone" dataKey="availability" stroke="#3b82f6" name="Availability %" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}