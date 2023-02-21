import { Age } from "./age/Age";
import { PersonName } from "./personName/PersonName";
import { Phone } from "./phone/Phone";
import { Email } from "./email/Email";
import { PersonCount } from "./personCount/PersonCount";
import { ExplainDetails } from "./explainDetails/ExplainDetails";
import { Source } from "./source/Source";
export const RegisterForm = () => {
	return (
		<div>
			<PersonName />
			<Age />
			<Phone />
			<Email />
			<PersonCount />
			<ExplainDetails />
			<Source />
		</div>
	);
};
