import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Grid, GridItem, Container, VStack } from '@chakra-ui/react'
import IntroCard from './IntoCard/IntroCard'
 
const Home: NextPage = () => {
  return (
    <Container centerContent maxW='container.md'>
      <VStack spacing='2rem'>
        <IntroCard/>
      </VStack>
    </Container>
  )
}

export default Home
