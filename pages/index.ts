import { createElement as h } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';
import { getTodosAPI } from '../lib/api/todo';

interface IProps {
    todos: TodoType[];
}

const app: NextPage<IProps> = ({ todos }) => {
  console.log(process.env, 'client');
  return h(TodoList, { todos });
};

export default app;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    console.log(process.env, 'server');

    const { data } = await getTodosAPI();
    console.log(data);
    return { props: { todos: data } };
  } catch (e) {
    console.log(e);
    return { props: { todos: [] } };
  }
};
