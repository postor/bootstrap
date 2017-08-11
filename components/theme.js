export const themes = {
  blue: {
    headerStyle: {
      backgroundColor: '#111722'
    },
    bannerStyle: {
      background: 'linear-gradient( to top, #2e5394, #111722)'
    },
    footerStyle: {
      backgroundColor: '#111722'
    },
  },
  green: {
    headerStyle: {
      backgroundColor: '#0c5f78'
    },
    bannerStyle: {
      background: 'linear-gradient( to top, #09878e, #0c5f78)'
    },
    footerStyle: {
      backgroundColor: '#0c5f78'
    },
  },
  dark: {
    headerStyle: {
      backgroundColor: '#444'
    },
    bannerStyle: {
      background: 'linear-gradient( to top, #888, #444)'
    },
    footerStyle: {
      backgroundColor: '#444'
    },
  },
}

export const getTheme = (x) => {
  if (x in themes) {
    return themes[x]
  }

  return themes.blue
}

export const dataPathTheme = 'global.theme.current'

export const bannerImgSrc = `data:image/gif;base64,R0lGODlhAwABAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBRUZFQUUzNzI5RjExRTdCNDZFRTI3NEIxMzczQ0MwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBRUZFQUU0NzI5RjExRTdCNDZFRTI3NEIxMzczQ0MwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEFFRkVBRTE3MjlGMTFFN0I0NkVFMjc0QjEzNzNDQzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEFFRkVBRTI3MjlGMTFFN0I0NkVFMjc0QjEzNzNDQzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAAACwAAAAAAwABAAACAoQLADs=`//`data:image/svg+xml;utf8,<svg width="300" height="100" xmlns="http://www.w3.org/2000/svg"></svg>`


export const absoluteStyle = { width: '100%', height: '100%', position: 'absolute', }
export const absoluteTopLeft = { ...absoluteStyle, top: 0, left: 0, }

export const noPadding = {
  padding: 0,
  margin: 0,
}
