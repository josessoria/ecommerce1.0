import React from 'react'
import {Container} from "reactstrap"
import "../../../styles/common-section.scss"

const commonsection = (props) => {
  return (
    <section className='common_section'>
        <Container>
            <h2 className='text-white'>
                {props.title}
            </h2>
        </Container>
    </section>
  )
}

export default commonsection