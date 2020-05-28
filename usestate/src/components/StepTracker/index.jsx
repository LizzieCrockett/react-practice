import React from 'react';


const StepTracker = () => {
    const [steps, setSteps] = React.useState(0);
    const increment = () => {
        setSteps(steps + 1)
    }
    return (
        <div className="tracker">
            Today you've taken {steps} steps!
            <div className="button">
                <button onClick={increment}>I took a step!</button>
            </div>
        </div>
    )

}

export default StepTracker;