import {clerkClient} from '@clerk/express'

//middleware (bve educator route)
export const protectEducator = async (req,res,next) =>{
    try {
        const userId = req.auth.userId
        const response = await clerkClient.users.getUser(userId)

        if(response.publicMetadata.role !== 'educator'){
            return res.json({success:false, message:'Không được phép truy cập'})
        }

        next()
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}