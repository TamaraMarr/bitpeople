const formatName = (name) => {
    const nameArr = name.split(' ');
    
    const [firstLetterFirstName, ...restFirstName] = nameArr[0];
    const firstName = `${firstLetterFirstName.toUpperCase()}${restFirstName.join('')}`;
    
    const [firstLetterLastName, ...restLastName] = nameArr[1];
    const lastName = `${firstLetterLastName.toUpperCase()}${restLastName.join('')}`;
    
    return `${firstName} ${lastName}`;
}

export default formatName;