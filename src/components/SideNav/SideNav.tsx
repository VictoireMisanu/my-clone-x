interface SideNavProps {
    className?:string;
    children: JSX.Element | JSX.Element[]
}


function SideNav ({className, children}:SideNavProps){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default SideNav