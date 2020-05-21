import React from 'react'

const CreateSubmissionForm = () => {
  return (
    <div>
      <h1 className="text-center accent">Upload Your Project</h1>
      <form className="form">
        <div className="form__section">
          <span className="form__icon fab fa-github"></span>
          <input className="form__element form__element--with-icon" type="text" placeholder="Repository URL"/>
        </div>

        <div className="form__section">
          <span className="form__icon fas fa-link"></span>
          <input className="form__element form__element--with-icon" type="text" placeholder="Live Preview URL"/>
        </div>

        <div className="form__section form__section--right-aligned">

          <span class="bold">MAKE SOLUTION PUBLIC</span>
          <label className="toggle-switch toggle-switch--space-around">
            <input type="checkbox" />
            <span className="toggle-switch__slider round"></span>
          </label>
          <button type="submit" className="button button--primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateSubmissionForm
