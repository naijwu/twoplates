'use client';

import { parseData } from '@/utilities/helpers';
import styles from './page.module.css'
import { INPUT_EXAMPLE } from '@/utilities/example';

export default function Home() {

  function runExample() {
    const result = parseData(INPUT_EXAMPLE)
    console.log(result)
  }

  return (
    <main className={styles.main} onClick={runExample}>
      Click me
    </main>
  )
}
