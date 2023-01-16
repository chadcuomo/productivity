import { type NextPage } from "next";

interface Heading {
  headingText: string
}
const Heading: NextPage<Heading> = ({ headingText }) => {
  return (
    <div className="bg-white rounded-lg px-8 py-6 text-center">
      <h1 className="text-2xl font-semibold text-zinc-700">{headingText}</h1>
      <h4 className="font-medium mt-2 text-zinc-700">Wednesday, January 11</h4>
    </div>
  );
};

export default Heading;