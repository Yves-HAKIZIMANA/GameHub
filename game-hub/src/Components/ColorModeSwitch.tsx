import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text>{colorMode === 'dark' ? "Dark mode" : "Light mode"}</Text>
    </HStack>
  )
}

export default ColorModeSwitch