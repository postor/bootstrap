import { connect } from 'react-redux'
import { getTheme, dataPathTheme } from './theme'
import { getPath } from '../tools/store/json'


const Footer = ({ theme }) => {
  const themeData = getTheme(theme)
  return (<div style={{
    ...themeData.footerStyle,
    minHeight: 200,
  }} />)
}



export default connect(state => {
  return {
    theme: getPath(state, dataPathTheme)
  }
})(Footer)