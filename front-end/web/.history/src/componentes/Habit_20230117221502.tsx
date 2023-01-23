interface HabitProps{
    completed: number
}


export default function Habit (props){
    return (
        <p>{props.completed}</p>
    )
}