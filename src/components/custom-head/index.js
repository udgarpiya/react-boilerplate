import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const CustomHead = ({
  title = 'React Boilerplace',
  description = 'React Boilerplate Description',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

CustomHead.defaultProps = {
  title: 'React Boilerplace',
  description: 'React Boilerplate Description',
}

CustomHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export { CustomHead }
export default CustomHead
