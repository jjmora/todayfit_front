import React from 'react'
import './blog-style.css'
import image1 from '../../assets/images/blog/fitness-1.jpg'
import image2 from '../../assets/images/blog/fitness-2.jpg'
import image3 from '../../assets/images/blog/fitness-3.jpg'
import BlogPostCard from './BlogPostCard'

const Blog = () => {
  return (
    <section className='container mt-5'>
      <main className="container">

        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
            <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
            <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
          </div>
        </div>

        <div className="row mb-2">


          
          {/* > SINGLE POST CARD*/}
          <BlogPostCard 
            title="Title 1"
            date="25 Nov"
            category="Fitness"
            image={image1}
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
          />
          {/* < SINGLE POST CARD */}

          {/* > SINGLE POST CARD*/}
          <BlogPostCard 
            title="Title 2"
            date="2 Sept"
            category="Fitness"
            image={image2}
            text="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
          />
          {/* < SINGLE POST CARD */}

          {/* > SINGLE POST CARD*/}
          <BlogPostCard 
            title="Title 3"
            date="15 Dec"
            category="Body building"
            image={image3}
            text="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
          />
          {/* < SINGLE POST CARD */}
        
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>

            <article className="blog-post">
              <h2 className="blog-post-title mb-1">Sample blog post</h2>
              <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

              <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
              <hr />
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h2>Blockquotes</h2>
              <p>This is an example blockquote in action:</p>
              <blockquote className="blockquote">
                <p>Quoted text goes here.</p>
              </blockquote>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h3>Example lists</h3>
              <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
              <ul>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ul>
              <p>And this is an ordered list:</p>
              <ol>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ol>
              <p>And this is a definition list:</p>
              <dl>
                <dt>HyperText Markup Language (HTML)</dt>
                <dd>The language used to describe and define the content of a Web page</dd>
                <dt>Cascading Style Sheets (CSS)</dt>
                <dd>Used to describe the appearance of Web content</dd>
                <dt>JavaScript (JS)</dt>
                <dd>The programming language used to build advanced Web sites and applications</dd>
              </dl>
              <h2>Inline HTML elements</h2>
              <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
              <ul>
                <li><strong>To bold text</strong>, use <code className="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
                <li><em>To italicize text</em>, use <code className="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
                <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code className="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code className="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
                <li>Citations, like <cite>— Mark Otto</cite>, should use <code className="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
                <li><del>Deleted</del> text should use <code className="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code className="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
                <li>Superscript <sup>text</sup> uses <code className="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code className="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
              </ul>
              <p>Most of these elements are styled by browsers with few modifications on our part.</p>
              <h2>Heading</h2>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h3>Sub-heading</h3>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <pre><code>Example code block</code></pre>
              <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
            </article>

            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary rounded-pill" href="#">Older</a>
              <a className="btn btn-outline-secondary rounded-pill disabled">Newer</a>
            </nav>

          </div>

          {/* > SideBar */}
          <div className="col-md-4">
            <div className="position-sticky">
              
              {/* > About */}
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
              </div>
              {/* < About */}

              {/* > Archives Links */}
              <div className="p-4">
                <h4 className="fst-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  <li><a href="#">March 2021</a></li>
                  <li><a href="#">February 2021</a></li>
                  <li><a href="#">January 2021</a></li>
                  <li><a href="#">December 2020</a></li>
                  <li><a href="#">November 2020</a></li>
                  <li><a href="#">October 2020</a></li>
                  <li><a href="#">September 2020</a></li>
                  <li><a href="#">August 2020</a></li>
                  <li><a href="#">July 2020</a></li>
                  <li><a href="#">June 2020</a></li>
                  <li><a href="#">May 2020</a></li>
                  <li><a href="#">April 2020</a></li>
                </ol>
              </div>
              {/* < Archives Links */}

              {/* > External Links */}
              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li><a href="#">GitHub</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Facebook</a></li>
                </ol>
              </div>
              {/* < External Links */}


            </div>
          </div>
          {/* < SideBar */}
        </div>

      </main>
    </section>
  )
}

export default Blog