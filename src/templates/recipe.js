import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import Recipe from '../components/Recipe';

const RecipeTemplate = ({data}) => {

  const {
    title,
    field_preparation_time,
    field_cooking_time,
    field_difficulty,
    field_ingredients,
    field_summary,
    field_recipe_instruction,
    relationships,
  } = data.nodeRecipe;

  return(
    <Layout>
      <Recipe
        imageUrl={relationships.field_image.url}
        title={title}
        prepTime={field_preparation_time}
        cookTime={field_cooking_time}
        difficulty={field_difficulty}
        ingredients={field_ingredients}
        instructions={field_recipe_instruction.value}
        summary={field_summary.value}
      />
    </Layout>
  )
}

export const query = graphql`
  query recipeQuery($slug: String!) {
    nodeRecipe(path: {alias: {eq: $slug}}) {
      id
      title
      field_preparation_time
      field_cooking_time
      field_difficulty
      field_ingredients
      field_summary {
        value
        format
        processed
      }
      field_recipe_instruction {
        value
        format
        processed
      }
      relationships {
        field_image {
          url
        }
      }
    }
  }
`

export default RecipeTemplate
