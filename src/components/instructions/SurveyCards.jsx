import React from 'react';
import { useState } from 'react';
import DLCard from './DLCard';
import { 
} from '@chakra-ui/react';

const SurveyCards = () => {
	
	const [cards] = useState([
		{ heading: 'CX Customer Care', description: 'View a summary of all your customers over the last month.', buttonText: 'Download' },
		{ heading: 'CX Digital Exp', description: 'View a summary of all your customers over the last month.', buttonText: 'Download' },
		{ heading: 'EX Candidate Exp', description: 'View a summary of all your customers over the last month.', buttonText: 'Download' },
		{ heading: 'EX Employee Exp', description: 'View a summary of all your customers over the last month.', buttonText: 'Download' },
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