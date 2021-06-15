import { NextPage } from "next";
import { Button } from "../modules/ui/components/Button";

const Page: NextPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-200">
      <div className="text-4xl font-semibold">
        <div className="text-center mb-4">Hello</div>
        <Button href="/docs">Docs</Button>
      </div>
    </div>
  );
};

export default Page;
