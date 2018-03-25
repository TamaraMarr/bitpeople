const formatEmail = (email) => {
    const emailArr = email.split('@');
    const emailString = emailArr[0];

    const firstPart = emailString.slice(0, 3);
    const lastPart = emailString.slice(emailString.length - 3, emailString.length);

    return `${firstPart}...${lastPart}@${emailArr[1]}`;
}

export default formatEmail;