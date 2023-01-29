import React from 'react'
import Button from '../components/shared/Button'
import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card>
        <div className="about">
            <h1>About</h1>
            <p>This is my react app to leave feedback for products or services</p>
            <p>Version 1.0.0</p>
            <Button>Back to Home</Button>
        </div>
    </Card>
  )
}

export default AboutPage