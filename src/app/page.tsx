import Image from 'next/image'
import styles from './page.module.css'
import dash from './dash.module.css'

export default function Home() {
  return (

    <main>
        <div>
            {/*main row*/}
            <div>
                {/*column left*/}
                <div>
                    {/*row 1*/}
                    <div>
                        {/*column 1*/}
                        <div>{/*box1*/}</div>
                    </div>
                    <div>
                        {/*column 2*/}
                        <div>{/*box2*/}</div>
                    </div>
                </div>
                <div>
                    {/*box3*/}
                </div>
            </div>
            <div>
                {/*column right*/}
                <div>{/*box4*/}</div>
                <div className={styles.dashBox5}>{/*box5*/}</div>
            </div>

        </div>
    </main>
  )
}
