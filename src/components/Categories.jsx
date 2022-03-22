import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { categories } from "../data"
import { CategoryItem } from './CategoryItem'

const Container = styled.div`
  display: flex ;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "25px 3px", flexDirection: "column" })}

`

export const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}