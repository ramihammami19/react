
function Private({children}) {


    

    const isLogin= false
  return (
    <div>{isLogin ? children  : <div>please login</div>}</div>
  )
}

export default Private