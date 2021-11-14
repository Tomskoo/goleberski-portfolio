import React from 'react'
import { Box, Grid, GridItem, Container, VStack, Heading } from '@chakra-ui/react'
import Profile from './Profile'
import LinkProbes from './LinkProbes'

const Header = () => {
    return <Box w="100%">
      <Grid templateCols="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Box>Thomas Goleberski</Box>
        </GridItem>
        <GridItem colSpan={1} colStart={10}>
          <Box>LinkedIn</Box>
        </GridItem>
        <GridItem colSpan={1} colStart={11}>
          <Box>GitHub</Box>
        </GridItem>
      </Grid>
    </Box>
  }
  
  const SubHeader = () => {
    return <Box w="100%">
      <Grid templateCols="repeat(12, 1fr)" templateRows="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={4} rowSpan={2} rowStart={0} colStart={0}>
          Pro Pic
        </GridItem>
        <GridItem colSpan={6} rowSpan={1} rowStart={0} colStart={4}>
          Bachelor of Applied Science in Electrical Engineering
        </GridItem>
        <GridItem colSpan={6} rowSpan={1} rowStart={1} colStart={4}> 
          Full Stack Software Developer at CenterLine Windsor Limited
        </GridItem>
      </Grid>
    </Box>
  }

const IntroCard = () => {
    return (
        <>
            <Box w="100%">
                <VStack>
                    <Heading>THOMAS GOLEBERSKI</Heading>
                    <Grid>
                        <GridItem>
                            <Profile/>
                        </GridItem>
                        <GridItem>
                            <LinkProbes/>
                        </GridItem>
                    </Grid>
                </VStack>
            </Box>
        </>
    )
}

export default IntroCard
