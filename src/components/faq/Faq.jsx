import React from 'react'
import './faq.css';
import { 
	Accordion, 
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from '@chakra-ui/react'

const Faq = () => {
  
	return (
    
		<Accordion allowMultiple margin='100px' >
			<div className='accordion__title'>
				<h2>FAQs</h2>
			</div>
			<AccordionItem marginTop='50px' marginBottom='50px'>
				<h2>
					<AccordionButton>
						<Box as="span" flex='1' textAlign='left'>
							Q: Why does this tool need my email?
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					A: The app require an email address, 
					so that I can limit the number of requests a person can make in a given day 
					(due to infrastructure costs being all out of pocket).
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem marginTop='50px' marginBottom='50px'>
				<h2>
					<AccordionButton>
						<Box as="span" flex='1' textAlign='left'>
							Q: I'm having trouble running this tool in my browser, is DataIRL supported on all browsers?
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					A: DataIRL is optimized to run on Chrome. 
					Support for other browsers can be expected in the future.
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem marginTop='50px' marginBottom='50px'>
				<h2>
					<AccordionButton>
						<Box as="span" flex='1' textAlign='left'>
							Q: I ran into an issue while using the tool, how can I get support?
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					A: Shoot me an email at: rickjhoppe@gmail.com with a brief description of the issue or Slack me internally..
				</AccordionPanel>
			</AccordionItem>


			<AccordionItem marginTop='50px' marginBottom='50px'>
				<h2>
					<AccordionButton>
						<Box as="span" flex='1' textAlign='left'>
							Q: I think this tool is neat, but I think it could be better. How can I submit feedback to the development team?
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					A: I would love to hear feedback, please send an email to my personal or internal email or Slack me internally.
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem marginTop='50px' marginBottom='50px' paddingBottom='50px'>
				<h2>
					<AccordionButton>
						<Box as="span" flex='1' textAlign='left'>
							Q: How can I support development of the tool?
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4} height='75px'>
					A: Use the tool and tell your friends about the tool. Additionally, reach out to me if you would like to support the tool in a development capacity.
				</AccordionPanel>
			</AccordionItem>

    </Accordion>
  )
}

export default Faq