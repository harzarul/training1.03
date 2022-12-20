
import styles from './styles';
import { Navbar, Hero, Broker, Auctions, Works, Collections, Categories, Creators, CTA, Footer} from './containers';


const App = () => {
  return (
    <div className={`w-full overflow-hidden main__background text-white`}>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.paddingsX} ${styles.boxWidth}`}>
          <Navbar/>
          <Auctions/>
          <Works/>
          <Collections/>
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className='w-full'>
          <Categories/>
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.paddingsX}`}>
          <Creators/>
          <CTA/>
        </div>
      </div>

       <div className={`${styles.flexCenter}`}>
        <div className='w-full'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App