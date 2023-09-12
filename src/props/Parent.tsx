
import { ChildAsFC } from './Child'



const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log("clicked")}>
        fdgdfgd
            </ChildAsFC>
}

export default Parent 