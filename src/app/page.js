import Image from 'next/image';
import styles from './css/globals.css';
import Sendxrp from './xrp/Sendxrp.js';

export default function Home() {
  return (
    <>
      <script async src="https://unpkg.com/xrpl/build/xrpl-latest-min.js"></script>
      <Sendxrp />
    </>

  );
}
