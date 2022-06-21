import React from 'react'
import { View, Text } from 'react-native'
import ScreenSectionStyled from './screen_section_styles'

const ScreenSection = (props) => {
  const { name, height } = props
  return (
    <ScreenSectionStyled style={{ height }}>
      <View>
        <Text>{name}</Text>
      </View>
    </ScreenSectionStyled>
  )
}

export default ScreenSection
