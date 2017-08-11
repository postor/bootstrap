
import { translate } from 'react-i18next'
import Layout from '../components/Layout.js'
import { Link } from '../tools/routes'
import Banner from '../components/Banner'

const translateNS = ['index']

const Index = (props) => {
  const { t } = props
  return (<div>
    <Banner />
    <div className="container">
      <h1>{t('My Blog')}</h1>
      <p>
        <Link route='posts'>
          <a>{t('See my posts')} >></a>
        </Link>
      </p>
      <div style={{ height: 500 }} />
      <p>
        <Link route='post' params={{ title: 'Hello Next.js' }} >
          <a>{t('See my first post')} >></a>
        </Link>
      </p>
    </div>


  </div>
  )
}

Index.translateNS = translateNS

export default Layout(translate(translateNS)(Index))