import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.Contacts}</span>
      <span className="navigation-links-text1">{props.News}</span>
      <span className="navigation-links-text2">{props.Posters}</span>
      <span className="navigation-links-text3">{props.Videos}</span>
      <span className="navigation-links-text4">{props.Home}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  Contacts: 'تواصل معنا',
  Videos: 'مقاطع فيديو',
  Home: 'الرئيسية',
  News: 'أخبار',
  rootClassName: '',
  Posters: 'بوسترات',
}

NavigationLinks.propTypes = {
  Contacts: PropTypes.string,
  Videos: PropTypes.string,
  Home: PropTypes.string,
  News: PropTypes.string,
  rootClassName: PropTypes.string,
  Posters: PropTypes.string,
}

export default NavigationLinks
