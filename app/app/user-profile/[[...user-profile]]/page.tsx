import {UserProfile} from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="pb-10">
    <UserProfile path="/user-profile" routing="path" />
  </div>
);

export default UserProfilePage;
