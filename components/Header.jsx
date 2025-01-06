export default function Header({score}) {
    return (
        <div className = "header">
                <h1>Memory Game</h1>
                <div>Current Score: {score}</div>
         </div>
    )
}