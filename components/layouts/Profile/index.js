import React, { useState, useEffect } from "react";
import Router from "next/router";

import { EditProfile, ProfileOverview } from "./Profile";

const Profile = ({ data, sessionData }) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!sessionData.isAuthorized) {
      Router.push("/login");
    }
  }, []);

  return (
    <>
      {!edit ? (
        <ProfileOverview data={data} setEdit={setEdit} />
      ) : (
        <EditProfile data={data} setEdit={setEdit} />
      )}
    </>
  );
};

export default Profile;
