import React from 'react'

const PermissionCard = (props) => {
  return (
    <article className ="col-6 p-2">
      <div className="p-3 shadow rounded">
          <i className={props.class}></i>
          <br/>
          <small className=''>{props.text}</small>
      </div>
    </article>
  )
}

export default PermissionCard