import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

import RecipeCardList from '../components/RecipeCardList'
import RecipeCard from '../components/RecipeCard'

const RecipesPage = ({ data }) => (
  <Layout>
    <h1>All Recipes</h1>

    <RecipeCardList>
      {data.allNodeRecipe.edges.map(({ node }) => (
        <RecipeCard
          key={node.id}
          imageUrl={node.relationships.field_image.url}
          title={node.title}
          alias={node.path.alias}
          prepTime={node.field_preparation_time}
          cookTime={node.field_cooking_time}
          difficulty={node.field_difficulty}
          summary={node.field_summary.value}
          category={node.relationships.field_recipe_category}
        />
      ))}
    </RecipeCardList>
  </Layout>
)

export default RecipesPage

export const query = graphql`
  query allNodeRecipe {
    allNodeRecipe {
      edges {
        node {
          id
          title
          field_preparation_time
          field_cooking_time
          field_difficulty
          field_summary {
            value
            processed
          }
          relationships {
            field_image {
              url
            }
            field_recipe_category {
              name
            }
          }
          path {
            alias
          }
        }
      }
    }
  }
`
