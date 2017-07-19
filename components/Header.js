
import React from 'react'
import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import i18nHelper from '../tools/i18n-helper'
import { getUser, logout } from '../tools/store/user'
import { getContextedFetch } from '../tools/fetch'
import { Link } from '../tools/routes'

const langNames = {
  en: 'English',
  zh: '中文'
}

class Header extends React.Component {

  handleChangeLanguage(e) {
    i18nHelper.setCurrentLanguage(e.target.value)
  }

  handleLogout() {
    var { dispatch } = this.props
    dispatch(logout())
  }

  render() {
    const { t, user } = this.props

    var login = (user && user.username) ? (
      <NavItem onClick={this.handleLogout.bind(this)}>{t('Logout')}</NavItem>
    ) : (
        <Link route="login">
          <NavItem href="#">{t('Login')}</NavItem>
        </Link>
      )

    return (<Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">next.js-boilerplate</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <Link route="index">
            <NavItem href="#">{t('Home')}</NavItem>
          </Link>
          <Link route="about">
            <NavItem href="#">{t('About')}</NavItem>
          </Link>
          <Link route="posts">
            <NavItem href="#">{t('Posts')}</NavItem>
          </Link>
          {login}
        </Nav>
        <Nav pullRight style={{ marginRight: 0 }}>
          <NavDropdown title={langNames[i18nHelper.getCurrentLanguage()]} id="basic-nav-dropdown">
            <MenuItem onClick={() => i18nHelper.setCurrentLanguage('en')}>{langNames.en}</MenuItem>
            <MenuItem onClick={() => i18nHelper.setCurrentLanguage('zh')}>{langNames.zh}</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }

  static translateNS = ['common']
  static async getInitialProps(ctx) {
    const { store } = ctx
    return await store.dispatch(getUser(getContextedFetch(ctx), store))
      .catch(() => {
      })
  }
}

export default connect(state => state)(translate(Header.translateNS)(Header))
