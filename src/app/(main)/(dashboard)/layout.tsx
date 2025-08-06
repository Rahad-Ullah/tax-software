import Sidebar from "@/components/layout/dashboard/Sidebar";
import Container from "@/components/shared/Container";
import { myFetch } from "@/utils/myFetch";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const res = await myFetch("/users/profile");
  const user = res?.data;

  return (
    <Container>
      <div className="flex gap-6 py-14">
        <Sidebar user={user} />
        <div className="bg-[#FCFCFD] p-6 rounded-lg flex-1">{children}</div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
