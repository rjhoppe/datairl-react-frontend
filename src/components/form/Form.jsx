import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Select,
	Card,
	CardBody,
	Stack,
	StackDivider,
	Box,
	Button,
} from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi'

const Form = () => {

	const handleSubmit = e => {
		// Prevent the default submit and page reload
		e.preventDefault()

		// Check for fields not filled out


		// Remove after testing
		alert(`Email: ${email}, Response Type: ${requestType}, Anonymous Link: ${anonLink}, Response Number: ${respNum}`)

		// Add API links
		let url = ''
		if (requestType === 'cx-cust-care') {
			url = 'placeholder'
		} else if(requestType === 'cx-dig-exp') {
			url = 'placeholder'
		} else if(requestType === 'ex-can-exp') {
			url = 'placeholder'
		} else if(requestType === 'ex-emp-exp') {
			url = 'placeholder'
		} else {
			console.log('ERROR: Request type not valid')
		}

		axios.post(`${url}`, { 
				Email: email, 
				ResponseType: requestType, 
				AnonymousLink: anonLink,
				ResponseNumber: respNum })
			.then(response => {
				alert('Test')
				console.log(response)
				// Handle response
			})
			.catch(error => {
				console.log(error)
			})	
	}

	const [email, setEmail] = useState()
	const [requestType, setRequestType] = useState()
	const [anonLink, setAnonLink] = useState()
	const [respNum, setRespNum] = useState()
	const handleChange = (respNum) => setRespNum(respNum)


  return (
		<Card alignItems='center'>
			<CardBody>
				<Stack divider={<StackDivider />}	spacing='4'>
					<Box width='500px'>
						<FormControl>
							<FormLabel>Email address</FormLabel>
							<Input 
								type='email'
								name='email'
								id='form__email'
								isRequired='true'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<FormHelperText textAlign='left'>We'll never share your email.</FormHelperText>
						</FormControl>
					</Box>
					<Box>
						<FormControl>
							<FormLabel>Select a project type</FormLabel>
							<Select 
								id='form__resp__type' 
								isRequired='true' 
								placeholder='Select option'
								type='text'
								name='requestType'
								value={requestType}
								onChange={e => setRequestType(e.target.value)}
							>
								<option value='cx-cust-care'>CX Customer Care</option>
								<option value='cx-dig-exp'>CX Digital Experience</option>
								<option value='ex-can-exp'>EX Candidate Experience</option>
								<option value='ex-emp-exp'>EX Employee Experience</option>
							</Select>
						</FormControl>
					</Box>
					<Box>
						<FormControl>
							<FormLabel>Anonymous survey link</FormLabel>
							<Input 
								type='url'
								name='anonLink'
								isRequired='true'
								id='form__anon__link'
								value={anonLink}
								onChange={e => setAnonLink(e.target.value)}
							/>
							<FormHelperText></FormHelperText>
						</FormControl>
					</Box>
					<Box>
						<FormControl>
							<FormLabel>Number of responses</FormLabel>
							<NumberInput step={5} max={100} min={5} value={respNum} onChange={handleChange}>
								<NumberInputField />
								<NumberInputStepper
									type='number'
									name='respNum'
									isRequired='true'
									id='form__resp__num'
									value={respNum}
									onChange={handleChange}
								>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
						</FormControl>
					</Box>
					<Button
						leftIcon={<HiOutlineMail />} 
						colorScheme='blue' 
						variant='solid'
						onClick={handleSubmit}
					>
    				Submit
					</Button>
				</Stack>
			</CardBody>
		</Card>
  )
}

export default Form