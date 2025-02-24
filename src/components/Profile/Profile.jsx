import React from "react";
import "./Profile.css";

const data = [
  {
    id: 1,
    title: "Doğum tarihi",
    description: "29.07.1995",
  },
  {
    id: 2,
    title: "İkamet Şehri",
    description: "İzmir",
  },
  {
    id: 3,
    title: "Eğitim Durumu",
    description: "Dokuz Eylül Ünv. Elektrik-Elektronik Müh. - 2019",
  },
  {
    id: 4,
    title: "Tercih Ettiği Rol",
    description: "Frontend Developer",
  },
];

function Profile() {
  return (
    <div id="profile-container">
      <h2>Profile</h2>
      <div className="profile-content">
        <div className="profile-items">
          <h3>Profile</h3>
          {data.map((item, index) => (
            <div key={index} className="profile-item">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="about-me">
          <h3>About Me</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p>
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
