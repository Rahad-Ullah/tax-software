import Sidebar from "@/components/layout/dashboard/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-6">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
