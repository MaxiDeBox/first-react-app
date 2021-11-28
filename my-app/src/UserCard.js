import React from "react";
import PropTypes from "prop-types";

export default function UserCard(props) {
  const {user, onSendMessage, onSendInvite} = props;

  return (
    <div style={{
      border: "1px solid gray",
      borderRadius: "15px",
      textAlign: "center",
      width: "300px",
      margin: "10px"
    }}>
      <p>
        {user.name} {user.surname}
      </p>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px"
      }}>
        <button onClick={onSendInvite}>Send request</button>
        <button onClick={onSendMessage}>Write message</button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
  onSendInvite: PropTypes.func.isRequired,
  onSendMessage: PropTypes.func.isRequired,
};


UserCard.defaultProps = {
  onSendInvite() {},
  onSendMessage() {},
};
