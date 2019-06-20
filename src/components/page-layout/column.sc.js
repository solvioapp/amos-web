import styled from 'styled-components'

const width = (value, defValue = ``) => (
  value ? `width: ${value / 12 * 100}%` : defValue
)

const Col = styled.div `
  float: left;
  ${({xs}) => width(xs, `width: 100%`)};

  @media only screen and (min-width: 768px) {
    ${({sm}) => width(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({md}) => width(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({lg}) => width(lg)};
  }
`

export default Col
