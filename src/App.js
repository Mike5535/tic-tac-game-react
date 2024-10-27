import './App.css'
import { TicTacCell } from './shared'
import { useTicTac } from './hook.ts'

function App() {
  const {
    cells,
    winer,
    lastSlected,
    restart,
    cellListener
  } = useTicTac()

  return (
    <div className='tic-tac__wrapper'>
      <div className='tic-tac__title'>
        Turn: { lastSlected === 'x'? 'o': 'x' }

        <button onClick={restart}> Restart </button>
      </div>

      <div className='tic-tac'>
        { Object.values(cells).map(
          (cellContent, key) => 
          (<TicTacCell 
            key={key}
            onMouseDown={() => cellListener(key)}
          > 
            { cellContent }
          </TicTacCell>)) 
        }

        {
          winer &&
          <div className='tic-tac__winer'> Winer: { winer }! </div>
        }
      </div>
    </div>
  )
}

export default App
