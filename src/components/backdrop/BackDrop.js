import './BackDrop.css';

export const BackDrop = ({drawerHandler}) => {
    return (
        <div onClick={() => drawerHandler(false)} className="backDrop">
            
        </div>
    )
}
