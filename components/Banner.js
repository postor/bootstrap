import { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'react-bootstrap'

import { dataPathTheme, getTheme, absoluteTopLeft, bannerImgSrc, noPadding, themes } from './theme'
import { getPath, setJSON } from '../tools/store/json'
import FlexCenter from './FlexCenter'


class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(setJSON('blue', dataPathTheme))
  }

  onBannerChange(index) {
    const { dispatch } = this.props
    const theme = Object.keys(themes)[index]
    dispatch(setJSON(theme, dataPathTheme))

  }

  render() {
    const getBannerStyle = (theme) => {
      const themeData = getTheme(theme)
      return {
        ...themeData.bannerStyle,
        width: "100%",
        minHeight: 200,
      }
    }
    return (<Carousel style={{ width: "100%", margin: '0 auto', color: '#fff' }} interval={3000} controls={false} onSelect={this.onBannerChange.bind(this)}>
      <Carousel.Item>
        <img alt="900x500" src={bannerImgSrc} style={getBannerStyle('blue')} />
        <div style={{
          ...absoluteTopLeft,
        }}>
          <FlexCenter flexDirection="column">
            <FlexCenter>
              <h1 style={noPadding}>Page1</h1>
            </FlexCenter>
          </FlexCenter>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="900x500" src={bannerImgSrc} style={getBannerStyle('green')} />
        <div style={{
          ...absoluteTopLeft,
        }}>
          <FlexCenter flexDirection="column">
            <FlexCenter>
              <h1 style={noPadding}>Page2</h1>
            </FlexCenter>
          </FlexCenter>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="900x500" src={bannerImgSrc} style={getBannerStyle('dark')} />
        <div style={{
          ...absoluteTopLeft,
        }}>
          <FlexCenter flexDirection="column">
            <FlexCenter>
              <h1 style={noPadding}>Page3</h1>
            </FlexCenter>
          </FlexCenter>
        </div>
      </Carousel.Item>
    </Carousel>)
  }
}

export default connect(state => {
  return { theme: getPath(state, dataPathTheme) }
})(Banner)