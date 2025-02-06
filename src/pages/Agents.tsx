import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";

const agentsData = [
  { id: 1, name: "John Doe", performance: 92, missedCalls: 5, newClients: 12 },
  { id: 2, name: "Sarah Smith", performance: 88, missedCalls: 3, newClients: 15 },
  { id: 3, name: "Mike Johnson", performance: 95, missedCalls: 2, newClients: 18 },
  { id: 4, name: "Lisa Brown", performance: 85, missedCalls: 7, newClients: 10 },
  { id: 5, name: "David Wilson", performance: 90, missedCalls: 4, newClients: 14 },
];

const Agents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 mb-8">
          <Users className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">MacNulty Agents</h1>
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
              {agentsData.map((agent) => (
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