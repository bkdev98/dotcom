import styled from 'styled-components'

export default styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 808px) {
    flex-direction: column;
  }
`
