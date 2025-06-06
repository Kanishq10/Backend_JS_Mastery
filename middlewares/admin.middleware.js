//for admin purpose
export const authorizeAdmin = async(req, res, next)=>{
    try {
        let secretKey;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            // console.log(req.headers.authorization);
            secretKey= req.headers.authorization.split(' ')[1];
        }

        if(!secretKey) return res.status(401).json({message:'Unauthorized'});
        if(secretKey!="MeowmeowHAHA") return res.status(401).json({message:'Unauthorized'})
        next();
    } catch (error) {
        res.status(401).json({message:"Unauthorized" ,error: error.message })
    }
}