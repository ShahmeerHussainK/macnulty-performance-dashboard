import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { time: '9AM', calls: 45 },
  { time: '10AM', calls: 75 },
  { time: '11AM', calls: 120 },
  { time: '12PM', calls: 85 },
  { time: '1PM', calls: 95 },
  { time: '2PM', calls: 130 },
  { time: '3PM', calls: 110 },
];

export function CallVolume() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Call Volume</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="calls" stroke="#1e40af" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}