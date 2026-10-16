import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <main className="page-wrap">
      <section className="about-hero">
        <p className="section-kicker">OUR STORY</p>
        <h1>A greener home starts with a little care.</h1>
        <p>Paradise Nursery was created around a simple idea: everyone deserves a little more nature in their everyday spaces. We curate welcoming, beautiful houseplants for first-time plant parents and experienced indoor gardeners alike.</p>
        <p>From resilient favorites to statement-making foliage, our collection is chosen to help you find the right plant for your home, your routine, and your growing confidence.</p>
        <Link className="button button-primary" to="/plants">Explore our plants →</Link>
      </section>
      <section className="about-values">
        <article className="value-card"><span>♧</span><h3>Thoughtfully chosen</h3><p>A considered collection of plants for a range of spaces and care routines.</p></article>
        <article className="value-card"><span>♡</span><h3>Care made simple</h3><p>We believe growing your confidence should be as rewarding as growing a plant.</p></article>
        <article className="value-card"><span>☀</span><h3>Everyday wellbeing</h3><p>Small moments of green can make a room feel more personal and peaceful.</p></article>
      </section>
    </main>
  );
}

export default AboutUs;
