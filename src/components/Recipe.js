import React from 'react'
import styled from 'styled-components'
import Config from '../../gatsby-config'

const Card = styled.article`
  flex: 0 0 100%;
`

const Recipe = props => {
  return (
    <Card>
      <figure>
        <img
          src={Config.siteMetadata.apiUrl + props.imageUrl}
          alt={props.title}
        />
      </figure>
      <h3>
        <a href={props.alias}>{props.title}</a>
      </h3>
      <p className="icon-list">
        <span
          className="icon icon--prepTime"
          role="img"
          aria-label="Preparation time"
        >
          ⏱
        </span>{' '}
        Preparation time: {props.prepTime}'
        <span
          className="icon icon--cookTime"
          role="img"
          aria-label="Cooking time"
        >
          ‍👨🏻‍🍳
        </span>{' '}
        Cooking time: {props.cookTime}'
        <span
          className="icon icon--difficulty"
          role="img"
          aria-label="Difficulty"
        >
          {(() => {
            switch (props.difficulty) {
              case 'easy':
                return '★☆☆'
              case 'medium':
                return '★★☆'
              case 'hard':
              default:
                return '★★★'
            }
          })()}
        </span>
      </p>
      {props.category &&
        (() => {
          return (
            <p>
              <strong>Type:</strong>
              {props.category.map(function(element, i) {
                return (
                  <span className="icon" key={i}>
                    {element.name}
                  </span>
                )
              })}{' '}
            </p>
          )
        })()}
      {props.tags &&
        (() => {
          return (
            <p>
              <strong>Tags:</strong>
              {props.tags.map(function(element, i) {
                return (
                  <span className="icon" key={i}>
                    {element.name}
                  </span>
                )
              })}{' '}
            </p>
          )
        })()}

      <p dangerouslySetInnerHTML={{ __html: props.summary }} />
      <div>
        <h4>Ingredients</h4>
        <ul className="ingredients-list">
          {props.ingredients.map(function(value, i) {
            return <li key={i}>{value}</li>
          })}
        </ul>
      </div>
      <div>
        <h4>Instructions</h4>
        <p dangerouslySetInnerHTML={{ __html: props.instructions }} />
      </div>
    </Card>
  )
}

export default Recipe
