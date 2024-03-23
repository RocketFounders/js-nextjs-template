export const ProfileCard = ({profile}) => {
    return <div className={"profile-card"}>
        <h3>{profile.firstName} {profile.lastName}</h3>
        <ul>
            <li>Role: {profile.role}</li>
            <li>Email: {profile.email}</li>
        </ul>
    </div>
}
