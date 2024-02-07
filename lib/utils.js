import { useEffect, useState } from 'react';

class UserT {
    constructor(userDataJson) {
        if (userDataJson != null) {
            this.raju = true;
            try {


                const data = JSON.parse(userDataJson) || {};

                this.name = data.name || '';
                this.age = data.age || '';
                this.sex = data.sex || '';
                this.addr = data.addr || '';
                this.email = data.email || '';
                this.phone = data.phone || '';
                this.dp = data.dp || 'dp.jpg';
                this.group = data.group || 'Not Assign';
                this.role = data.role || '';
                this._id = data._id || '';
                this.createdAt = data.createdAt || '';
                this.updatedAt = data.updatedAt || '';
                this.__v = data.__v || 0;
            }catch (e){

            }
        } else {
            this.raju = false;
        }
    }
}

function UserX() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (window) {
            const userDataJson = window.localStorage.getItem('user');
            setUser(new UserT(userDataJson));
        }
    }, []);

    return user;
}

export default UserX;
