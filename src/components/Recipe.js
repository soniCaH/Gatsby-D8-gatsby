import React from 'react'
import styled from 'styled-components'
import Config from '../../gatsby-config'

const Card = styled.article`
  flex: 0 0 100%;
`;

const Recipe = (props) => {
  return (
    <Card>
      <figure>
        <img src={ Config.siteMetadata.apiUrl + props.imageUrl } alt={ props.title } />
      </figure>
      <h3><a href={ props.alias }>{ props.title }</a></h3>
      <p className="icon-list">
        <i className="icon icon--prepTime">⏱</i> Preparation time: {props.prepTime}'
        <i className="icon icon--cookTime">‍👨🏻‍🍳</i> Cooking time: {props.cookTime}'
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
      <div>
        <h4>Ingredients</h4>
        <ul className="ingredients-list">
         { props.ingredients.map(function(value, i) {
           return <li key={i}>{ value }</li>
         }) }
         </ul>
      </div>
      <div>
        <h4>Instructions</h4>
        <p dangerouslySetInnerHTML={{ __html: props.instructions}}></p>
      </div>
    </Card>
  )
}

export default Recipe
