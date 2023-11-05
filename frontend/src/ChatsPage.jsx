import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage=(props)=>{
    return(
        <div style={{height:'100vh'}}>
        <PrettyChatWindow
        projectId='
        eeae0e8e-f041-47e6-ab22-71b42f2ace7f'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:"100%"}}/>
</div>
    )
}
export default ChatsPage