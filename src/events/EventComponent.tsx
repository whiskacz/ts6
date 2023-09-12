import React from 'react'

const EventComponent: React.FC = () => {
    
    const onChange = (e:React.ChangeEvent) => {
        
    }
    
    return(
        <div>
            <input onChange={onChange} />
        </div>
    )
}

export default EventComponent