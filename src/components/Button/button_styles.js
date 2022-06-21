import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'

import { TouchableOpacity } from 'react-native'

export const DarkButton = styled(TouchableOpacity)`
  font-size: 16px;
  background-color: ${Colors.aquamarine};
  border-radius: 0;
  padding: 5px 15px 5px 15px;
  width: 110px;
  height: 45px;
  color: ${Colors.white};
  border: solid 1px ${Colors.aquamarine};
`

export const LightButton = styled(TouchableOpacity)`
  font-size: 16px;
  color: ${Colors.aquamarine};
  border-radius: 0;
  padding: 5px 15px 5px 15px;
  width: 110px;
  height: 45px;
  background-color: ${Colors.white};
  border: solid 1px ${Colors.aquamarine};
`
