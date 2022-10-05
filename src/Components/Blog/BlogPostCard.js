import React from 'react'

const BlogPostCard = (props) => {
  return (
    <div className="col-lg-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">{props.category}</strong>
          <h3 className="mb-0">{props.title}</h3>
          <div className="mb-1 text-muted">{props.date}</div>
          <p className="card-text mb-auto text-justify">{props.text}</p>
          <a href="/blog/article" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-4">
          <img src={props.image} alt='woman fitness' className='img-fluid article-image'/>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard