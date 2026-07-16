import React from 'react'
import Containar from '../ui/Container'
import { Link, useLocation } from 'react-router'

const BreadCrumb = () => {
  const { pathname } = useLocation()
  const location = pathname.split("/").pop()

  return (
    <Containar>
        {/* Right Side */}
        <h2 className="font-jost font-medium text-sm text-primary-black uppercase">
          <Link to="/">HOME</Link> / {location}
        </h2>
    </Containar>
  )
}

export default BreadCrumb