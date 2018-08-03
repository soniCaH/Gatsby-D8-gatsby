import React from 'react'
import styled from 'styled-components'
import Config from '../../gatsby-config'

const Card = styled.article`
  flex: 0 0 49%;
`;


const RecipeCard = (props) => {
  return (
    <Card>
      <figure>
        <img src={ Config.siteMetadata.apiUrl + props.imageUrl } alt={ props.title } />
      </figure>
      <h3><a href={ props.alias }>{ props.title }</a></h3>
      <p className="icon-list">
        <i className="icon icon--prepTime">⏱</i> {props.prepTime}'
        <i className="icon icon--cookTime">‍👨🏻‍🍳</i> {props.cookTime}'
        <i className="icon icon--difficulty">
        {(() => {
        switch (props.difficulty) {
          case "easy":   return "★☆☆";
          case "medium": return "★★☆";
          case "hard":
          default:       return "★★★";;
        }
      })()}
        </i>
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.summary }}></p>
    </Card>
  )
}

export default RecipeCard
