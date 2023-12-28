const formatDateTime = (string) => {
    
    const dateTime = new Date(string)
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(dateTime)

    return formattedDate
}

export default formatDateTime