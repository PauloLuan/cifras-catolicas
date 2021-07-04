import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const Container = styled(Box)`
  b {
    color: #f70;
    cursor: pointer;
    cursor: col-resize;

    &:hover {
      color: white;
      border-radius: 3px;
      cursor: pointer;
      cursor: col-resize;
      background: #f70;
    }
  }
`
