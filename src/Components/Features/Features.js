import React from 'react'
import './features-style.css'

const Features = () => {
  return (
    <section className="container-fluid bg-warning features-section d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 px-4 px-lg-5 px-xl-0 features-section-div">
        <div className="row flex-lg-row-reverse row-cols-1 row-cols-sm-2 g-4">
          <div className="d-flex flex-column gap-2">
            <div className="text-bg-primary bg-gradient px-3 py-2 rounded-3 align-self-start">
              <i className="bi bi-universal-access"></i>
            </div>
            <h4 className="fw-semibold mb-0">Featured title</h4>
            <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div className="d-flex flex-column gap-2">
            <div className="text-bg-primary bg-gradient px-3 py-2 rounded-3 align-self-start">
              <i className="bi bi-toggles2"></i>
            </div>
            <h4 className="fw-semibold mb-0">Featured title</h4>
            <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div className="d-flex flex-column gap-2">
            <div className="text-bg-primary bg-gradient px-3 py-2 rounded-3 align-self-start">
              <i className="bi bi-trophy"></i>
            </div>
            <h4 className="fw-semibold mb-0">Featured title</h4>
            <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
          </div>

          <div className="d-flex flex-column gap-2">
            <div className="text-bg-primary bg-gradient px-3 py-2 rounded-3 align-self-start">
              <i className="bi bi-calendar-week"></i>
            </div>
            <h4 className="fw-semibold mb-0">Featured title</h4>
            <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start gap-2 px-3 px-md-4">
          <h3 className="fw-bold">Left-aligned title explaining these awesome features</h3>
          <p className="text-muted">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" className="btn btn-primary btn-lg">Primary button</a>
        </div>
      </div>
    </section>
  )
}

export default Features