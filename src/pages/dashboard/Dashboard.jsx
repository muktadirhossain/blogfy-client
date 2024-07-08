// Counter with Use State:🧮
import { useReducer, useState } from "react"

const Dashboard = () => {

  const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case 'inc':
        return state + 1;
      case 'dec':
        return state - 1;
      case 'inc_by':
        return state + action.payload;
      default:
        return state
    }

  }

  const [count, dispatch] = useReducer(reducer, 0)

  const inc = () => {
    dispatch({
      type: 'inc',
    })
  }
  const dec = () => {

    dispatch({
      type: 'dec',
    })

  }

  return (
    <div>
      <div>
        <div className='flex justify-center gap-x-5'>
          <button onClick={dec} className='btn btn-error' >-</button>
          <p className='text-4xl'>{count}</p>
          <button onClick={inc} className='btn btn-success'>+</button>
          <button onClick={() => dispatch({
            type: 'inc_by',
            payload: 50,
          })} className='btn btn-success'>+50</button>
          <button onClick={() => dispatch({
            type: 'inc_by',
            payload: 5,
          })} className='btn btn-success'>+5</button>
          <button onClick={() => dispatch({
            type: 'inc_by',
            payload: 10,
          })} className='btn btn-success'>+10</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


// import { useReducer } from "react"
// import { useState } from "react"

// const Dashboard = () => {
//   const actionTypes = {
//     INC: 'inc',
//     DEC: 'dec',
//     INC_BY: 'inc_by'
//   }

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case actionTypes.INC:
//         return state + 1
//       case actionTypes.DEC:
//         return state - 1
//       case actionTypes.INC_BY:
//         return state + action.payload
//       default:
//         return state
//     }
//   }

//   const [count, dispatch] = useReducer(reducer, 0)

//   // const [count, setCount] = useState(0)

//   const inc = () => {
//     // setCount((prev) => prev + 1)
//     dispatch({
//       type: actionTypes.INC
//     })
//   }
//   const dec = () => {
//     // setCount((prev) => prev - 1)
//     dispatch({ type: actionTypes.DEC })
//   }


//   return (
//     <div>
//       <div>
//         <div className='flex justify-center gap-x-5'>
//           <button onClick={dec} className='btn btn-error' >-</button>
//           <p className='text-4xl'>{count}</p>
//           <button onClick={inc} className='btn btn-success'>+</button>
//           <button
//             onClick={() => dispatch({ type: actionTypes.INC_BY, payload: 10 })}
//             className='btn btn-success'>+10</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard



