import React from 'react'
import Link from 'gatsby-link'
import RecipeCardList from '../components/RecipeCardList';
import RecipeCard from '../components/RecipeCard';

const RecipesPage = ({ data }) => (
  <section>
  <h1>All recipes</h1>
    <RecipeCardList>
      
      { data.allNodeRecipe.edges.map(( { node }) => (
        <RecipeCard
          key={node.id}
          imageUrl={node.relationships.field_image.url}
          title={node.title}
          alias={node.path.alias}
          prepTime={node.field_preparation_time}
          cookTime={node.field_cooking_time}
          difficulty={node.field_difficulty}
          summary={node.field_summary.value}
        />
      ))}
      </RecipeCardList>
    </section>
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
          }
          path {
            alias
          }
        }
      }
    }
  }
`
