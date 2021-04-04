import axios from 'axios';

export default {
    getExercise: function(){
        return axios.get(`https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/`)
    },
};