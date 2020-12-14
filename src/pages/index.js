import React from "react"
import Layout from '../components/layout'
import me from '../images/mgoolsby.jpg'
import boxBow from '../images/boxbowport.png'

const IndexPage = () => {
  return (
    <Layout>
      <section id="about">
        <h2>My name is Mike Goolsby & I am a software engineer living in New York City. I have experience building full-stack applications and websites using a variety of languages, technologies, and frameworks. I also have experience looking tremendously cool in front of waterfalls in Northern Thailand.</h2>
        <a href="#contact"><img src={me} className="hvr-grow" id="me" alt="mike in front of a waterfall in thailand, super dapper"></img></a>
      </section>
      <section id="experience">
        <ul>
          <li id="fade">I've served in the US Army.</li>
          <li>I've been involved in multi-million dollar product rollouts.</li>
          <li>I've managed key relationships in regional accounts.</li>
          <li>I've liaised between clients + sales + engineering.</li>
          <li>And I've kept teams successful, as a manager, through one of the most economically volatile times ever.</li>
        </ul>
      </section>
      <section id="projects">
        <div className="project">
          <h2>Here are some of my most recent projects.</h2>
          <h4>Box & Bow</h4>
          <div className="projects">
            <a href="https://github.com/mikegoolsby/box_bow_client"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="External Link"
            >View on Github</a>
          </div>
          <img src={boxBow} className="proj-img" alt="home page of box and bow"></img>
          <p>An application that allows you to put your holiday shopping list in one, easy-to-use place. Track your wishlist, attach a link, add the price, and even notate the item with some comments.</p>
        </div>
      </section>
      <section id="photos">

      </section>
      <section id="contact">

      </section>
    </Layout>
  )
}

export default IndexPage
