interface ProfileInfoProps {
    className?:string;
    children: JSX.Element | JSX.Element[]
}



export default function ProfileInfo({className, children}:ProfileInfoProps){
    return(
        <div className={className}>
            {children}
        </div>
    )
}