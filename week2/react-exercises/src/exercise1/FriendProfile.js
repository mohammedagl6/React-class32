


const FriendProfile = ({friend}) => {
    const {name, location, email, phone} = friend;
    return(
        <div>
           { name && <ul>
                <li>First Name: {name?.first}</li>
                <li>Last Name: {name?.last}</li>
                <li>Address: {`${location?.street?.name} ${location?.street?.number}, ${location?.city}`}</li>
                <li>Country: {location?.country}</li>
                <li>Email: {email}</li>
                <li>Email: {phone}</li>
            </ul>}
       </div>
        
    )
}
export default FriendProfile;