export const signup=async(req,res)=>{
    try{
        res.status(200).json({
            data:"hi"
        })
    }
    catch(error){
        console.log(`Error in signupController ${error.message}`)
    }
       
    
}
export const login = async(req,res)=>{  try{
    res.status(200).json({
        data:"hi"
    })
}

catch(error){
    console.log(`Error in signupController ${error.message}`)
}
}
  

export const logout=async(req,res)=>{
    
    try{
        res.status(200).json({
            data:"hi"
        })
    }
    catch(error){
        console.log(`Error in signupController ${error.message}`)
    }
      
}