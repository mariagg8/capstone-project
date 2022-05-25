import Head from 'next/head';
import Image from 'next/image';
import BooksCard from '../component/booksCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <h1>My Book App</h1>
      <BooksCard></BooksCard>
    </>
  );
}
