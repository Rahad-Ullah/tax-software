import EditProfileForm from "@/components/forms/EditProfileForm";
import ProfileDetails from "@/components/pages/dashboard/profile/ProfileDetails";
import Modal from "@/components/shared/Modal";
import { Button } from "@/components/ui/button";
import { myFetch } from "@/utils/myFetch";
import { SquarePen } from "lucide-react";

const ProfileDetailsPage = async () => {
  const res = await myFetch("/users/profile");
  const user = res?.data;

  return (
    <div>
      <section className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium">Personal Information</h1>
        <Modal
          dialogTrigger={
            <Button className="font-normal px-4 bg-[#FCDFDE] text-primary hover:text-white">
              <SquarePen /> Edit Profile
            </Button>
          }
          className="max-w-[50vw]"
        >
          <EditProfileForm />
        </Modal>
      </section>

      <section>
        <ProfileDetails user={user} />
      </section>
    </div>
  );
};

export default ProfileDetailsPage;
