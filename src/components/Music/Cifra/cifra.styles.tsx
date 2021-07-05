import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const Container = styled(Box)`
  b {
    color: #f70;
    cursor: pointer;

    &:hover {
      color: white;
      border-radius: 3px;
      cursor: pointer;
      background: #f70;
    }
  }
`
