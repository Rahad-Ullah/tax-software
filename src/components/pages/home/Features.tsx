import Container from "@/components/shared/Container";
import Image from "next/image";
import fileIcon from "../../../assets/icons/file-check-icon.svg";
import formIcon from "../../../assets/icons/form-icon.svg";
import lockIcon from "../../../assets/icons/lock-icon.svg";
import shieldIcon from "../../../assets/icons/shield-check-icon.svg";
import taxIcon from "../../../assets/icons/tax-refund-icon.svg";
import thumbIcon from "../../../assets/icons/thumb-icon.svg";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <div className="py-12">
      <Container>
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-semibold text-muted">### Features</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center">
            We offer a wide range of unique features to help you get the best of
            your taxes.
          </p>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-12">
          <div className="p-12 shadow rounded-xl relative">
            <h1 className="text-2xl font-medium text-muted">
              Auto-fill my return
            </h1>
            <p className="text-muted-foreground">
              Automatically download your tax information from most tax slips
              from the CRA.
            </p>
            <Image
              src={formIcon}
              alt="form-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
          <div className="p-12 shadow rounded-xl relative">
            <h1 className="text-2xl font-medium text-muted">100% Secure</h1>
            <p className="text-muted-foreground">
              Your security is our #1 priority.
            </p>
            <Image
              src={lockIcon}
              alt="lock-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
          <div className="p-12 shadow rounded-xl relative">
            <h1 className="text-2xl font-medium text-muted">Best tax refund</h1>
            <p className="text-muted-foreground">
              ## explores every possible tax-saving opportunity – automatically.
            </p>
            <Image
              src={taxIcon}
              alt="tax-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
          <div className="p-12 shadow rounded-xl relative">
            <h1 className="text-2xl font-medium text-muted">FILE FOR FREE</h1>
            <p className="text-muted-foreground">
              ## ONLINE offers 100% free tax filing to more Canadian taxpayers
              than any other leading tax program.
            </p>
            <Image
              src={fileIcon}
              alt="file-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
          <div className="p-12 shadow rounded-xl relative">
            <h1 className="text-2xl font-medium text-muted">Easy to use</h1>
            <p className="text-muted-foreground">
              ## makes preparing your tax return easy-to-use.
            </p>
            <Image
              src={thumbIcon}
              alt="thumb-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
          <div className="p-12 shadow rounded-xl relative">
            <h1 className="text-2xl font-medium text-muted">Guaranteed</h1>
            <p className="text-muted-foreground">
              ## Triple Guarantee is your assurance of Accuracy, Satisfaction
              and the Best Tax Result.
            </p>
            <Image
              src={shieldIcon}
              alt="shield-icon"
              width={62}
              height={62}
              className="absolute top-8 -left-8"
            />
          </div>
        </section>
        <section className="flex justify-center">
          <Button>See All Features</Button>
        </section>
      </Container>
    </div>
  );
};

export default Features;
