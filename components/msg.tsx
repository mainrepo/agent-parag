'use client'

import {AgentPic, UserPic} from '../components/pics';

function Msg(props: any) {
  if('user' === props.role){
    return (
      <><div className="chat-message">
        <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{props.message}</span></div>
            </div>
            <UserPic alt="End User" className="w-6 h-6 rounded-full order-1" />
        </div>
      </div></>
    )
  }
  if('assistant' === props.role){
    return (
      <><div className="chat-message">
        <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{props.message}</span></div>
            </div>
            <AgentPic alt="Agent Parag" className="w-9 h-9 rounded-full order-2" />
        </div>
      </div></>
    )
  }
}
export default Msg;
