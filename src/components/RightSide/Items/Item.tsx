interface RightSideItemsProps {
    className?:string;
    children: JSX.Element | JSX.Element[]
}


function Item ({className, children}:RightSideItemsProps){
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default Item