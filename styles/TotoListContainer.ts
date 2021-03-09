import styled from 'styled-components';
import palette from './palette';

const ToDoListContainer = styled.div`
    width: 100%;

    .todo-list-header {
      padding: 12px;
      border-bottom: 1px solid ${palette.gray};
      .todo-list-last-todo {
        font-size : 14px;
        span {
          margin-left: 8px;
        }
      }
      .todo-list-header-colors {
        display: flex;
        .todo-list-header-color-num {
          display: flex;
          margin-right: 8px;
          p {
            font-size: 14px;
            line-height: 16px;
            margin: 0;
            margin-left: 6px;
          }
          .todo-list-header-round-color {
            width: 16px;
            height: 16px;
            border-radius: 50%;
          }
        }
      }
    }
    .bg-blue {
      background-color: ${palette.blue};
    }
    .bg-green {
      background-color: ${palette.green};
    }
    .bg-navy {
      background-color: ${palette.navy};
    }
    .bg-orange {
      background-color: ${palette.orange};
    }
    .bg-red {
      background-color: ${palette.red};
    }
    .bg-yellow {
      background-color: ${palette.yellow};
    }
    .todo-list {
      .todo-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 52px;
        border-bottom: 1px solid ${palette.gray};
        .todo-left-side {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          .todo-color-block {
            width: 12px;
            height: 100%;
          }
          .checked-todo-text {
            color: ${palette.gray};
            text-decoration: line-through;
          }
          .todo-text {
            margin-left: 12px;
            font-size: 16px;
          }
        }
        .todo-right-side {
              display: flex;
              margin-right: 12px;
              svg {
                  &:first-child {
                    margin-right: 12px;
                  }
              }
              .todo-trash-can {
                  width: 16px;
                  path: {
                      fill: ${palette.deep_red};
                  }
              }
              .todo-check-mark {
                  fill: ${palette.deep_green}
              }
              .todo-button {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  border: 1px solid ${palette.gray};
                  background-color: transparent;
                  outline: none;
              }
          }
      }
    }
`;

export default ToDoListContainer;
