import React from 'react'
import styles from './index-css-modules.module.css'
import Container from '../components/container'
import Layout from '../components/layout'

const Oreo = props => (
  <div className={styles.oreo}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.flavor}>{props.flavor}</h2>
      <p className={styles.rating}>{props.rating}</p>
      <p className={styles.review}>{props.review}</p>
    </div>
  </div>
)

const IndexPage = () => (
  <Layout>
    <Container>
      <h1>Oreo Reviews</h1>
      <p>Here are just a few of my favorite Oreos:</p>
      <Oreo
        flavor="Original"
        avatar="https://target.scene7.com/is/image/Target/GUEST_8e46a893-7935-46b2-8728-4c301af687ba?wid=488&hei=488&fmt=pjpeg"
        rating="5/5"
        review="Ah, the old reliable. What's not to like about this one? Perfect in everyway possible."
      />

      <Oreo
        flavor="Peanut Butter"
        avatar="https://i5.walmartimages.com/asr/8cb368c1-f25a-4c1d-8514-3143778045fd_1.042ecdf5b431ec7d19f2729303e1781f.jpeg"
        rating="5/5"
        review="The crossover we've wanted our entire lives (minus those allergic to peanut butter. Hands down my favorite Oreo flavor or all time. Legend has it that I once ate an entire box of them in one sitting."
      />

      <Oreo
        flavor="Double Stuf"
        avatar="https://i.ebayimg.com/images/g/6oYAAOSwVRNZe7Kh/s-l640.jpg"
        rating="4/5"
        review="Quite frankly I think this is one of the most overhyped flavors I've ever tried. Yes, there's more cream, but do we REALLY need it? I think not."
      />


      <Oreo
        flavor="Firework"
        avatar="https://images-na.ssl-images-amazon.com/images/I/81jGjEV0FdL._SX466_.jpg"
        rating="2/5"
        review="On paper this is a pretty interesting flavor. However, I must admit that it's pretty disappointing. Yes, you well feel the pop rocks going off inside your mouth as you eat it. However, the flavors are ultimately just too sweet and it doesn't work well at all."
      />

      <Oreo
        flavor="Red Velvet"
        avatar="https://i5.walmartimages.com/asr/d35c88af-7900-4985-a633-74863be38c3a_1.ac47c7c828800dccb997ae2c0125925b.jpeg"
        rating="2/5"
        review="This is one of the more unique flavored Oreos that have somehow managed to find a permanent spot in the Oreo shelves. From what I've seen though, this flavor is wildly polarizing. Personally, I think the flavors are just a bit too articial and something I'm not super into."
      />

      <Oreo
        flavor="Dunkin Donuts Mocha"
        avatar="https://media1.popsugar-assets.com/files/thumbor/0J1zw7svAMLYo1FCUKNKYALjhqc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/30/748/n/1922195/f647fc01595682f738a631.80837405_edit_img_image_43431159_1492201800/i/Dunkin-Donuts-Mocha-Oreos.jpg"
        rating="5/5"
        review="This flavor will go down as one of the top 3 all-time flavors to me. If you are a coffee fan at all, you would go absolutely crazy for this. I say 'would' because this flavor was unfortunately a very limited time release about a year ago. Hopefully a future collaboration is on the way."
      />

    </Container>
  </Layout>
)

export default IndexPage
