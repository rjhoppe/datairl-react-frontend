import React from 'react';
import { useState } from 'react';
import DLCard from './DLCard';
import { 
} from '@chakra-ui/react';

const SurveyCards = () => {
	
	const [cards] = useState([
		{ heading: 'CX Customer Care', description: 'View a summary of all your customers over the last month.', buttonText: 'Download', buttonLink: "https://datairl-application.s3.amazonaws.com/static/CX_Customer_Care_DataIRL_Temp.qsf", buttonColor:'blue' },
		{ heading: 'CX Digital Exp', description: 'View a summary of all your customers over the last month.', buttonText: 'Download', buttonLink: "https://datairl-application.s3.amazonaws.com/static/CX_Digital_Experience_DataIRL_Temp.qsf", buttonColor:'blue' },
		{ heading: 'EX Candidate Exp', description: 'View a summary of all your customers over the last month.', buttonText: 'Download', buttonLink: "https://datairl-application.s3.amazonaws.com/static/EX_Candidate_Experience_Applicant_DataIRL_Temp.qsf", buttonColor:'blue' },
		{ heading: 'EX Employee Exp', description: 'View a summary of all your customers over the last month.', buttonText: 'Download', buttonLink:"https://datairl-application.s3.amazonaws.com/static/EX_Employee_Experience_DataIRL_Temp.qsf", buttonColor:'blue' },
		{ heading: 'CX Healthcare Exp', description: 'View a summary of all your customers over the last month.', buttonText: 'Coming Soon!' },
		{ heading: 'CX Gov Exp', description: 'View a summary of all your customers over the last month.', buttonText: 'Coming Soon!' }
	]);
	
	return (
		<body>
			< DLCard cards={cards}/>
		</body>
	)
}

export default SurveyCards