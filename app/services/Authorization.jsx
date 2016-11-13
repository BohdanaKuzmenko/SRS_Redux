import {POST} from 'services/Requests.jsx'
export default class Authorization {
    getSavedLogin() {
        return $('.login input').val()
    }

    getSavedPassword() {
        return $('.password input').val()
    }

    generateAuthObject(login, password) {
        return {
            "username": login,
            "password": password
        }
    }

    login(credentials) {
        let config = {
            method: 'GET',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            // body: `username=${credentials.login}&password=${credentials.password}`
        };
        var p1 = fetch('http://www.mocky.io/v2/57a736e80f00000620e067a3', config)
            .then(function (response) {
                return response.json();
            })

        return p1.then(function (user) {
            return user.data

        })
    }
}
