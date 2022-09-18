import Loader from "../loader";
import { ProfileContainer } from "./style";

const Profile = ({ body, style }) => {
  return (
    <ProfileContainer style={style}>
      <div className="profile-body">
        {body.props.children ? body : <Loader />}
      </div>
    </ProfileContainer>
  );
};

export default Profile;
