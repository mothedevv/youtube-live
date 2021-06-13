import React, { Component } from 'react'
import ReactRoundedImage from 'react-rounded-image'
import MoPic from '../images/mo.png'

const ArtistPic = () =>
{
    return(
        <div style={{ display: "flex" }}>
        <ReactRoundedImage
          image={MoPic}
          roundedColor="black"
          imageWidth="150"
          imageHeight="150"
          roundedSize="2"
          borderRadius="75"
        />
      </div>
    )
}

export default ArtistPic