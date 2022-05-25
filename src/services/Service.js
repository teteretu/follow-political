import { Component } from "react";

export default class Service extends Component {
    constructor(props) {
        super(props);
    }

    getDataUsingGet = (url) => {
        //GET request
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => {
                if (response && response.status == 200) {
                    return response.json();
                }
            })
            .catch((error) => {
                //Error
                alert(JSON.stringify(error));
                console.error(error);
            });
    };

    getDataUsingPost = (url, params) => {
        //POST json
        var dataToSend = { title: 'foo', body: 'bar', userId: 1 };
        //making data to send on server
        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        //POST request
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', //Request Type
            body: formBody, //post body
            headers: {
                //Header Defination
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })
            //If response is not in json then in error
            .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
            });
    };
}

