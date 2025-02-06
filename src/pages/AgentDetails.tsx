import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, PhoneMissed, Users } from "lucide-react";
import { AgentMetricsChart } from "@/components/AgentMetricsChart";

const agentsData = {
  1: {
    name: "John Doe",
    metrics: [
      { date: "2024-03-01", missedCalls: 2, newClients: 4, availability: 95 },
      { date: "2024-03-02", missedCalls: 1, newClients: 3, availability: 98 },
      { date: "2024-03-03", missedCalls: 3, newClients: 5, availability: 92 },
      { date: "2024-03-04", missedCalls: 0, newClients: 4, availability: 100 },
      { date: "2024-03-05", missedCalls: 2, newClients: 3, availability: 94 },
    ]
  },
  // Add more agents as needed
};

const AgentDetails = () => {
  const { id } = useParams();
  const agent = agentsData[id as keyof typeof agentsData];

  if (!agent) {
    return <div className="p-8">Agent not found</div>;
  }

  const latestMetrics = agent.metrics[agent.metrics.length - 1];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{agent.name}'s Performance</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Missed Calls Today
              </CardTitle>
              <PhoneMissed className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{latestMetrics.missedCalls}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                New Clients Today
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{latestMetrics.newClients}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Availability
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{latestMetrics.availability}%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <AgentMetricsChart data={agent.metrics} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgentDetails;