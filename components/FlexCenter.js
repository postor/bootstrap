export default (props) => {
  const { children, flexDirection = 'row', style } = props

  const newStyle = {
    ...style,
    display: 'flex',
    flexDirection,
    ...(flexDirection == 'column' ? { height: '100%' } : {})
  }

  return (<div style={newStyle}>
    <div style={{ flex: 1 }} />
    <div>{children}</div>
    <div style={{ flex: 1 }} />
  </div>)
}
