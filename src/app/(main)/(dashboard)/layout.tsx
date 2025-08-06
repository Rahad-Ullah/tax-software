import Sidebar from "@/components/layout/dashboard/Sidebar";
import Container from "@/components/shared/Container";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="flex gap-6 py-14">
        <Sidebar />
        {children}
      </div>
    </Container>
  );
};

export default DashboardLayout;
