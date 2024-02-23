const Info = ({text,status}) => {

  return (
    <div>
        {
            (function(){
                switch(status){
                    case 'info':
                        return text
                    case 'warning':
                        return text
                    case 'error':
                        return text
                    default :
                        return <h1>no status found</h1>
                }
            })()
        }
    </div>
  )
}

export default Info