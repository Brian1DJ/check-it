const ChatHeader = ({ name = "Secret Admirer", status = "online" }) => {
  return (
    <div className="chat-header">
      <div className="chat-avatar">💬</div>
      <div className="chat-info">
        <div className="chat-name">{name}</div>
        <div className="chat-status">
          <span className="status-dot"></span>
          {status}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;