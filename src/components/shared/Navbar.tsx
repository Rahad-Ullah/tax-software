import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#F9F9F9] py-4">
      <section>
        <Image src="/logo.png" alt="Company Logo" width={100} height={24} />
      </section>
      <section>Mid navbar</section>
      <section>Right navbar</section>
    </div>
  );
};

export default Navbar;
