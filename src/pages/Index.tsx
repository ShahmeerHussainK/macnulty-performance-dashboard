import { ChartBar, Users, PhoneCall, Percent, Clock } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { AgentPerformance } from "@/components/AgentPerformance";
import { CallVolume } from "@/components/CallVolume";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">MacNulty Call Center Dashboard</h1>
          <Button 
            onClick={() => navigate('/agents')}
            className="flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            View All Agents
          </Button>
        </div>
        
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