import Sidebar from "@/components/layout/dashboard/Sidebar";
import Container from "@/components/shared/Container";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="flex gap-6 py-14">
        <Sidebar />
        <div className="bg-[#FCFCFD] p-6 rounded-lg flex-1">{children}</div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
