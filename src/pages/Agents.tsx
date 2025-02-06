import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const agentsData = [
  { id: 1, name: "John Doe", performance: 92, missedCalls: 5, newClients: 12 },
  { id: 2, name: "Sarah Smith", performance: 88, missedCalls: 3, newClients: 15 },
  { id: 3, name: "Mike Johnson", performance: 95, missedCalls: 2, newClients: 18 },
  { id: 4, name: "Lisa Brown", performance: 85, missedCalls: 7, newClients: 10 },
  { id: 5, name: "David Wilson", performance: 90, missedCalls: 4, newClients: 14 },
];

const Agents = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [performanceFilter, setPerformanceFilter] = React.useState<string>("all");

  const filteredAgents = agentsData
    .filter(agent => 
      agent.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(agent => {
      if (performanceFilter === "high") return agent.performance >= 90;
      if (performanceFilter === "medium") return agent.performance >= 85 && agent.performance < 90;
      if (performanceFilter === "low") return agent.performance < 85;
      return true;
    });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Users className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">MacNulty Agents</h1>
          </div>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="w-full max-w-sm">
            <Input
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select
            value={performanceFilter}
            onValueChange={setPerformanceFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by performance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Performance</SelectItem>
              <SelectItem value="high">High (≥90%)</SelectItem>
              <SelectItem value="medium">Medium (85-89%)</SelectItem>
              <SelectItem value="low">Low (&lt;85%)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent Name</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Missed Calls</TableHead>
                <TableHead>New Clients</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAgents.map((agent) => (
                <TableRow
                  key={agent.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => navigate(`/agents/${agent.id}`)}
                >
                  <TableCell className="font-medium">{agent.name}</TableCell>
                  <TableCell>{agent.performance}%</TableCell>
                  <TableCell>{agent.missedCalls}</TableCell>
                  <TableCell>{agent.newClients}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Agents;