import React from "react";

function Welcome(props) {
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }

  function UserInfo(props) {
    console.log(props);
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }

  return (
    <div className="Comment">
      <UserInfo user={props.val.author} />
      <div className="Comment-text">{props.val.text}</div>
      <div>{Date()}</div>
    </div>
  );
}

const comment = {
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://picsum.photos/seed/picsum/200/300",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Welcome props={comment} />
  </React.StrictMode>,
  document.getElementById("root")
);

// or <FormattedDate date={this.state.date} />

export default Welcome;
