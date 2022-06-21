import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'

const ScreenSectionTwoStyled = styled.View`
  display: flex;
  min-height: 50px;
  width: 100%;
  margin: 10px;
  border: dotted 1px ${Colors.dividerColor};
`

ScreenSectionTwoStyled.one = styled.View`
  height: 100%;
  width: 100%;
  margin: 10px;
  border: dotted 1px ${Colors.dividerColor};
`

ScreenSectionTwoStyled.two = styled.View`
  height: 100%;
  width: 100%;
  margin: 10px;
  border: dotted 1px ${Colors.dividerColor};
`

export default ScreenSectionTwoStyled
