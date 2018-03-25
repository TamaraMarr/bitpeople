const formatDate = (date) => {
    const dob = new Date(date);

    return `${dob.getDate()}.${dob.getMonth() + 1}.${dob.getFullYear()}`
}

export default formatDate;