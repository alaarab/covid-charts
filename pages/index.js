import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { useEffect } from 'react';
import Chart from '../components/Chart';

export default function Home() {

  return (
    <>
      <Header/>
      <Chart/>
    </>
  )
}
