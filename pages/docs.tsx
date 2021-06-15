import { NextPage } from "next";
import { Button } from "../modules/ui/components/Button";

const Page: NextPage = () => {
  return (
    <div className="container p-12">
      <div>
        <div className="mb-4 text-xl font-semibold">Buttons</div>
        <div className="grid gap-6">
          <div className="grid grid-cols-3">
            <div>
              <Button href="#" size="s">
                Primary
              </Button>
            </div>
            <div>
              <Button href="#">Primary</Button>
            </div>
            <div>
              <Button href="#" size="l">
                Primary
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <Button type="secondary" href="#" size="s">
                Secondary
              </Button>
            </div>
            <div>
              <Button type="secondary" href="#">
                Secondary
              </Button>
            </div>
            <div>
              <Button type="secondary" href="#" size="l">
                Secondary
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <Button type="outline" href="#" size="s">
                Outline
              </Button>
            </div>
            <div>
              <Button type="outline" href="#">
                Outline
              </Button>
            </div>
            <div>
              <Button disabled type="outline" href="#" size="l">
                Outline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
