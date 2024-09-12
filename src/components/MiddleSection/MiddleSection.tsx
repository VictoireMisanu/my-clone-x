interface MiddleSectionProps {
    className?:string;
    children: JSX.Element | JSX.Element[]
}


function MiddleSection ({className, children}:MiddleSectionProps){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default MiddleSection