import styled from '@emotion/styled';

export const TableStyle = styled.table`
  width: 100%;
`

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.pallete.black.dark};
  * {
    color: ${({ theme }) => theme.pallete.white};
  }
  tr {
    font-weight: 900;
    padding: 5px 0;
    width: 100%;
    th {
      padding: 12px;
      text-align: start;
      border: 0;
      vertical-align: middle;

      :first-of-type {
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
      }

      :last-of-type {
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
      }
    }
  }
`

export const TableBody = styled.tbody`
  tr {
    :hover {
      background-color: ${({ theme }) => theme.pallete.primary.lightest};
    }
  }
  td {
    padding: 8px;
    height: 28px;
    vertical-align: middle;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
  }
`