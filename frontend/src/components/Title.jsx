import React from 'react'
import "../style/title.css"

const Title = ({ text1, text2 }) => {
  return (
    <div className="title-container">
      <p className="title-text">
        <span className="title-highlight">{text1}</span> {text2}
      </p>
    </div>
  )
}

export default Title;
