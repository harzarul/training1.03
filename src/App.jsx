
import styles from './styles';
import { Navbar, Hero, Broker, Auctions, Works, Collections, Categories, Creators, CTA, Footer} from './containers';


const App = () => {
  return (
    <div className={`w-full overflow-hidden main__background text-white`}>
      <div className='overlay'>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.paddingsX} ${styles.boxWidth}`}>
            <Navbar/>
            <Hero/>
            <Broker/>
            <Auctions/>
            <Works/>
            <Collections/>
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className='w-full bg-dimRed my-[4rem]'>
            <Creators/>
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.paddingsX}`}>
            <CTA/>
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className='w-full overlay'>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App