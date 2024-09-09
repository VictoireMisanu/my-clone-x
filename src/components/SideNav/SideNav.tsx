interface Props {
    className?:string;
    children: JSX.Element | JSX.Element[]
}


function SideNav ({className, children}:Props){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default SideNav