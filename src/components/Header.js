import * as React from 'react'
import { Link } from 'gatsby'
import { Stickyheader} from './StickyHeader'

export const Header = ({ isHomepage }) => {
  const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <header className={`site-header ${homepageClass}`}>
      <Link to="/">
      </Link>
      
    </header>
  )
}
