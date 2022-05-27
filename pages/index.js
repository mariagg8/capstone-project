import Head from 'next/head';
import Image from 'next/image';
import BooksCard from '../component/booksCard';
import styles from '../styles/Home.module.css';

export function getServerSideProps() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return {
    props: { API_KEY },
  };
}

export default function Home({ API_KEY }) {
  console.log(API_KEY);
  return (
    <>
      <h1>My Book App </h1>
      <BooksCard apikey={API_KEY}></BooksCard>
    </>
  );
}
