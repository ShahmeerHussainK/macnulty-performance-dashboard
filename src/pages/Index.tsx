import { ChartBar, Users, PhoneCall, Percent, Clock } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { AgentPerformance } from "@/components/AgentPerformance";
import { CallVolume } from "@/components/CallVolume";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">MacNulty Call Center Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Overall Performance"
            value="92%"
            icon={<ChartBar className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 2.5, isPositive: true }}
          />
          <MetricCard
            title="New Clients Today"
            value="24"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 10, isPositive: true }}
          />
          <MetricCard
            title="Missed Call Rate"
            value="4.2%"
            icon={<PhoneCall className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 1.1, isPositive: false }}
          />
          <MetricCard
            title="Conversion Rate"
            value="28%"
            icon={<Percent className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 3.2, isPositive: true }}
          />
          <MetricCard
            title="Total Calls Today"
            value="342"
            icon={<PhoneCall className="h-4 w-4 text-muted-foreground" />}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Available Agents"
            value="18/20"
            icon={<Clock className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AgentPerformance />
          <CallVolume />
        </div>
      </div>
    </div>
  );
};

export default Index;