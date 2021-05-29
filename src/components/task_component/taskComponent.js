import React from 'react'
import Tasks from '../tasks/tasks'

export default function TaskComponent(props) {
        return (
        <div>
            <Tasks category={props.category} />            
        </div>
    )
}
