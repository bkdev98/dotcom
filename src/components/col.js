import styled from 'styled-components'

export default styled.div`
  display: inline-block;
  width: ${props => props.lg || '50%'};
  @media (max-width: 808px) {
    width: ${props => props.sm || '100%'};
  }
`
