// @ts-nocheck
export const errorHandler = (err,req,res,next)=>{
	try{
		res.status(500).json({
			status: 500,
			message: "Something went wrong",
			data: err.message	
			// hata nesnesinden alınan belirli hata mesajı
		});
	}catch(e){
		next(e)
	}
    
}

export default errorHandler;