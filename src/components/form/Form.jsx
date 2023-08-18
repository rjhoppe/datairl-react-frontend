import React from 'react'
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
  return (
		<Card alignItems='center'>
			<CardBody>
				<Stack divider={<StackDivider />}	spacing='4'>
					<Box width='500px'>
						<FormControl>
							<FormLabel>Email address</FormLabel>
							<Input type='email' />
							<FormHelperText textAlign='left'>We'll never share your email.</FormHelperText>
						</FormControl>
					</Box>
					<Box>
						<FormControl>
							<FormLabel>Select a project type</FormLabel>
							<Select isRequired='true' placeholder='Select option'>
								<option value='option1'>CX Customer Care</option>
								<option value='option2'>CX Digital Experience</option>
								<option value='option3'>EX Employee Experience</option>
							</Select>
						</FormControl>
					</Box>
					<Box>
						<FormControl>
							<FormLabel>Anonymous survey link</FormLabel>
							<Input type='email' />
							<FormHelperText></FormHelperText>
						</FormControl>
					</Box>
					<Box>
						<FormControl>
							<FormLabel>Number of responses</FormLabel>
							<NumberInput step={5} max={100} min={5}>
								<NumberInputField />
								<NumberInputStepper>
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
					>
    				Submit
					</Button>
				</Stack>
			</CardBody>
		</Card>
  )
}

export default Form