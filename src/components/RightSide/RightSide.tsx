interface RightSideProps {
    className?:string;
    children: JSX.Element | JSX.Element[]
}


function RightSide ({className, children}:RightSideProps){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default RightSide