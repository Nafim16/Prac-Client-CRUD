import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loadedUser = useLoaderData();

    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateduser = {name, email};
        console.log(updateduser);

        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateduser)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('User updated');
            }
        })

    }

    return (
        <div>
            <h3>update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name}/>
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email}/>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;