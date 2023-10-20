import React, { useState } from "react";
import { EditProfile, ProfileOverview } from "./Profile";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  return <>{!edit ? <ProfileOverview setEdit={setEdit} /> : <EditProfile setEdit={setEdit}/>}</>;
};

export default Profile;
