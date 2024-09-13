interface TweetProps {
    className?:string;
    children: JSX.Element | JSX.Element[]
}


function Tweet ({className, children}:TweetProps){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default Tweet