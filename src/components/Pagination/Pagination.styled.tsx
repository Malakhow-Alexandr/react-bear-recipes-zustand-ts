import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 30px;

  ul {
    display: flex;
    list-style-type: none;
    margin-top:auto;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
      border-radius: 50%;
      cursor: pointer;
      color: #333;
      font-weight: bold;
      border: 1px solid transparent;
      padding: 8px 12px;

      &.active {
        background-color: orange;
        color: #fff;
      }
      
      &.disabled {
        position: absolute;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }

      &:hover:not(.active) {
        background-color: #f5f5f5;
      }
    }
  }
`;
