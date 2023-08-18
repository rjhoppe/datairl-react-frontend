import React from 'react'
import { useState } from "react";
import SurveyCards from './SurveyCards';
import Form from '../form/Form'
import './instructions.css';
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
	useSteps,
	Box,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel
} from '@chakra-ui/react'

const steps = [
  { title: 'First', description: 'Download a template project QSF' },
  { title: 'Second', description: 'Login to your brand' },
  { title: 'Third', description: 'Upload the QSF' },
	{ title: 'Fourth', description: 'Get the anonymous link' },
	{ title: 'Fifth', description: 'Fill out the request form' }
]

function Instructions() {
	const { activeStep, setActiveStep } = useSteps({
		index: 0,
		count: steps.length,
	})

  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return (
    <body>
      <Stepper size='md' index={activeStep} margin='50px'>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <Tabs index={activeStep} onChange={ handleTabsChange && setActiveStep }>
        <TabList justifyContent='center' textAlign='center' alignItems='center'>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Download Template QSF</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Login to Qualtrics</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Upload Template QSF</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Generate Anonymous Link</Tab>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Fill Out Application Request Form</Tab>
        </TabList>
        <TabPanels justifyContent='center' textAlign='center' alignItems='center'>
          <TabPanel id='tab__1'>
            <p className='tab__text'>Download one of the following template survey QSFs:</p>
            <SurveyCards />
            <p className='tab__text'>Currently, only template surveys for CX Customer Care, CX Digital Experience, EX Candidate Experience, EX Employee Experience are available. 
              The plan is to create more template surveys compatible with the tool based on need/interest.</p>
          </TabPanel>
          <TabPanel id='tab__2'>
            <p className='tab__text'>Login to your Qualtrics brand</p>
          </TabPanel>
          <TabPanel id='tab__3'>
            <p className='tab__text'>Upload your template to a new Qualtrics project</p>
          </TabPanel>
          <TabPanel id='tab__4'>
            <p className='tab__text'>Copy your project's anonymous link to your clipboard</p>
          </TabPanel>
          <TabPanel id='tab__5'>
            <p className='tab__text'>Request Form</p>
            <Form />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </body>
  )
}

export default Instructions