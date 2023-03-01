import { Age } from "./age/Age";
import { PersonName } from "./personName/PersonName";
import { Phone } from "./phone/Phone";
import { Email } from "./email/Email";
import { PersonCount } from "./personCount/PersonCount";
import { ExplainDetails } from "./explainDetails/ExplainDetails";
import { Source } from "./source/Source";
export const RegisterForm = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded  w-full h-screen ">
      <div className="flex flex-col items-center justify-center bg-gray-200 w-[400px] h-[500px] border p-3 rounded-lg">
        <PersonName />
        <Age />
        <Phone />
        <Email />
        <PersonCount />
        <ExplainDetails />
        <Source />
      </div>
    </div>
  );
};
