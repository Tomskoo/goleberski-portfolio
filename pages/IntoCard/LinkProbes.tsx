import React from 'react'
import { VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface ProbeProps {
    label: string,
    icon: string
}

const Probe = ({label, icon}: ProbeProps) => {
    return <>

    </>
}

const LinkProbes = () => {
    return (
        <VStack>
            <FontAwesomeIcon icon="circle"/>
            <FontAwesomeIcon icon="circle"/>
        </VStack>
    )
}

export default LinkProbes
