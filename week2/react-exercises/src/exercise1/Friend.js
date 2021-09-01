import {useState} from 'react'
import Button from './Button';
import FriendProfile from './FriendProfile';



const Friend = () => {
    const [friend, setFriend] = useState({});

    const getFriend = async () =>{
        try {
            const response = await fetch('https://www.randomuser.me/api?results=1');
            const {results} = await response.json();
            setFriend(results[0]);
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <Button getFriend={getFriend} />
        <FriendProfile friend={friend} />
        </>
    )
}

export default Friend;