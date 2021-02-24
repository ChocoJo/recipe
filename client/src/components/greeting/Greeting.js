import "./Greeting.css";

export const Greeting = ({name}) => {
    return (
        <div>
            <h1 className="title">Welcome <span className="name">{name}</span>, to this awesome website</h1>
        </div>
    )
}