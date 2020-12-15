import React from "react"
import Layout from '../components/layout'
import me from '../images/mgoolsby.jpg'
import boxBow from '../images/boxbowport.png'
import codex from '../images/codex.png'
import rqst from '../images/rqst.png'
import walter from '../images/wherewalter.png'

const IndexPage = () => {
  return (
    <Layout>
      <section id="about" data-sal="slide-left"
    data-sal-delay="1000"
    data-sal-easing="ease">
        <h2>My name is Mike Goolsby & I am a software engineer living in New York City. I have experience building full-stack applications and websites using a variety of languages, technologies, and frameworks. I also have experience looking tremendously cool in front of waterfalls in Northern Thailand.</h2>
        <a href="#contact"><img src={me} className="hvr-grow" id="me" alt="mike in front of a waterfall in thailand, super dapper"></img></a>
      </section>
      <section id="experience" data-sal="slide-right"
    data-sal-delay="1000"
    data-sal-easing="ease">
        <ul>
          <li id="fade">I've served in the US Army.</li>
          <li>I've been involved in multi-million dollar product rollouts.</li>
          <li>I've managed key relationships in regional accounts.</li>
          <li>I've liaised between clients + sales + engineering.</li>
          <li>And I've kept teams successful, as a manager, through one of the most economically volatile times ever.</li>
        </ul>
      </section>
      <section id="projects">
        <div className="project" data-sal="fade"
          data-sal-delay="200"
          data-sal-easing="ease">
          <h2>Here are some of my most recent projects.</h2>
          <h3>box & bow</h3>
          <div className="projects">
            <a href="https://frosty-darwin-4987e4.netlify.app/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="External Link"
            ><img src={boxBow} className="proj-img hvr-grow" alt="home page of box and bow"></img></a>
            <p>An application that allows you to put your holiday shopping list in one, easy-to-use place. Track your wishlist, attach a link, add the price, and even notate the item with some comments.</p>
          </div>
        </div>
        <h3>CODEX</h3>
        <div className="projects" data-sal="fade"
          data-sal-delay="200"
          data-sal-easing="ease">
        <a href="https://reverent-kalam-023988.netlify.app/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="External Link"
            ><img src={codex} className="proj-img hvr-grow" alt="home page of codex"></img></a>
            <p>CODEX is a resource repository for those about to attend a coding bootcamp - it includes tech gear recommendations, code games you can try, video resources, cheatsheets, and help for prepping for interviews.</p>
        </div>
        <h3>rqst</h3>
        <div className="projects" data-sal="fade"
          data-sal-delay="200"
          data-sal-easing="ease">
        <a href="https://rqst-go.herokuapp.com/rqst-go"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="External Link"
            ><img src={rqst} className="proj-img hvr-grow" alt="home page of rqsr"></img></a>
            <p>A simple application that puts your time-off requests, approved days, and pending requests all in one place. Log in to your RQST account to view days that are currently available to request off. Your account also gives you access to your pending requests, and allows you to edit them up until approval.</p>
        </div>
        <h3>where's walter?</h3>
        <div className="projects" data-sal="fade"
          data-sal-delay="200"
          data-sal-easing="ease">
              <a href="https://wheres-walter.vercel.app/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                      ><img src={walter} className="proj-img hvr-grow" alt="home page of where's walter"></img></a>
            <p>"Where's Walter" is a simple app that utilizes the Breaking Bad API to select a season of Breaking Bad, populate the list of episodes from that season, then sequentially populate a list of characters from that episode. You can click on a character to reveal their photo.</p>
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
