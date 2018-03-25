import axios from 'axios';
import Person from '../entities/Person';

class CommunicationService {
    fetchPeople() {
        return axios.get('https://randomuser.me/api/?results=15')
            .then(response => {
                return response.data.results;
            })
            .then(people => {
                return people.map(personData => {
                    return new Person(personData);
                })
            })
    }
}

export const commsService = new CommunicationService();