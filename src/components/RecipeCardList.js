import React from 'react'
import styled from 'styled-components'

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
`;

const RecipeCardList = (props) => {
  return (
    <List>
      {props.children}
    </List>
  )
}

export default RecipeCardList
