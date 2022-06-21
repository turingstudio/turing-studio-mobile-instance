import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../constants/colors'

const AppModal = styled.View`
  font-family: Arial;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  min-height: 155px;
  font-size: 18px;
  color: ${Colors.aquamarine};
  padding-top: 20px;
  padding-bottom: 20px;
`

AppModal.title = styled.View`
  padding-bottom: 15px;
`

AppModal.subtitle = styled.View`
  font-size: 16px;
  padding-bottom: 25px;
`

AppModal.buttons = styled.View`
  display: flex;
  justify-content: space-between;
  width: 250px;
`

AppModal.singleButton = styled.View`
  display: flex;
  justify-content: center;
  width: 220px;
`
export default AppModal
