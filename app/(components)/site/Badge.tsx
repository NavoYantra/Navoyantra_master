function Badge({text}:{text:string}) {
    return (
        <div>
            <span className={"uppercase p-2 px-8 rounded-full bg-blue-50 text-blue-600 text-xs"}>{text}</span>
        </div>
    );
}

export default Badge;