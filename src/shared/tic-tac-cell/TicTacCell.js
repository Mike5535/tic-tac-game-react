export function TicTacCell({children, onMouseDown}) {
    return (
      <div onMouseDown={onMouseDown} className="tic-tac-cell"> 
        { children }
      </div>
    )
  }