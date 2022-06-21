import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from './src/constants/colors'

const AppStyled = styled.View`
  margin: 30px;
  font-family: Arial;
  font-weight: normal;
  flex: 1;
`

AppStyled.title = styled.View`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 24px;
`

AppStyled.screenDivider = styled.View`
  height: 100%;
  width: 1px;
  background-color: ${Colors.dividerColor};
`

AppStyled.app = styled.ScrollView`
  height: 100%;
  width: 100%;
  border: 1px solid ${Colors.dividerColor};
  flex: 1;
`

export default AppStyled
