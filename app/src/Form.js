import React, { useState } from "react"

/**
 * @param {{ name: string; }} props
 */
const Form = props => {
  const [name, setName] = useState(props.name)
  return (
    <form>
      <input value={name} onChange={event => setName(event.target.value)} />
    </form>
  )
}

export default Form
