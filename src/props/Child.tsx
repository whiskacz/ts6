interface ChildProps {
    color: string;    
    onClick: () => void;
    children?: React.ReactNode;
}
// OPCJA 1
export const Child = ({color, onClick}:ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me!</button>
        </div>
}

// OPCJA 2
export const ChildAsFC:React.FC<ChildProps> = ({
    color,
    onClick,
    children
}) => {
    return <div>{color}</div>
}