const key = "575fbd2b0728ae7c870640023404c388"

export class customer {
  getOwner(id){
    fetch(`http://api.nessieisreal.com/accounts/${id}/customer?key=${key}`)
      .then((res)=>{
        res.json()
      })
      .then((json)=>{
        console.log(json)
      })
  }
}