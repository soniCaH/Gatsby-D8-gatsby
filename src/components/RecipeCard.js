import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
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
      <h3><Link to={ props.alias }>{ props.title }</Link></h3>
      <p className="icon-list">
        <span className="icon icon--prepTime" role="img" aria-label="Preparation time">⏱</span> {props.prepTime}'
        <span className="icon icon--cookTime" role="img" aria-label="Cooking time">‍👨🏻‍🍳</span> {props.cookTime}'
        <span className="icon icon--difficulty" role="img" aria-label="Difficulty">
        {(() => {
        switch (props.difficulty) {
          case "easy":   return "★☆☆";
          case "medium": return "★★☆";
          case "hard":
          default:       return "★★★";
        }
      })()}
       </span>
        {props.category.map(function(element, i) {
          return <span className="icon"> / {element.name}</span>;
        })}
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.summary }}></p>
    </Card>
  )
}

export default RecipeCard
