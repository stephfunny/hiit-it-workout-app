const TimeSelectionButtons = props =>
  (<div className='options-buttons-time'>
    {Math.floor(props.totalSelected / 60)}:
    {String(Math.floor(props.totalSelected % 60)).padStart(2, 0)}
    <br></br>

    <button onClick={() =>
      props.handleSelectionClick(props.options, '-')
    }>
      -
    </button>
    <button onClick={() =>
      props.handleSelectionClick(props.options, '+')
    }>
      +
    </button>
    <br></br>
    <span>{props.options}</span>
  </div>
  );

export default TimeSelectionButtons;
