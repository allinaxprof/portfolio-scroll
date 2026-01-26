import React, { useState } from 'react'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function QA() {

    let [isOver, setIsOver] = useState(false)
    const handleOver = () => { setIsOver(!isOver) }

    let chose = viteLogo
    if (isOver) { chose = reactLogo }

    return (
        <>
            <Card pic={chose} title="one" />
            <Card pic={chose} title="two" />
            <Card pic={chose} title="three" />

            <div className="flex items-center justify-center gap-4 my-8">
                <button
                    className="rounded-2xl border-2 p-2"
                    onMouseOver={handleOver}
                    onMouseLeave={handleOver}
                    onClick={handleOver}
                >
                    Over Here!
                </button>
                <Button
                    onMouseOver={(e) => handleOver(e)}
                    onMouseLeave={(e) => handleOver(e)}
                    onClick={(e) => handleOver(e)}></Button>
            </div>
        </>
    )
}

export default QA