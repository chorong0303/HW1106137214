function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
	<img
        className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
    />
	);
}

function UserInfo(props) {
  return (
	<div className="UserInfo-name">
          {props.author.name}
     </div>
	);
}

function App(props) {
  return (
	<div className="Comment">
		<div className="Comment-text">{props.text}</div>
		<div className="Comment-date">
			{formatDate(props.date)}
		</div>
    </div>
	);
}