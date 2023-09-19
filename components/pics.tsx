import agent from '../assets/images/parag.png'
import user from '../assets/images/user.png'
import Image from 'next/image'

export function AgentPic (props: any) {
    return (
      <Image src={agent} alt={props.alt} className={props.className} />
    )
}

export function UserPic (props: any) {
    const classes = props.className +" transform -scale-x-100";
    return (
      <Image src={user} alt={props.alt} className={classes} />
    )
}