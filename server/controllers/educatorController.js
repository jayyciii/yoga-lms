import {clerkClient} from '@clerk/express'


//update quyen cho giang vien
export const updateRoleToEducator = async (req,res)=>{
    try {
        const userId = req.auth.userId

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role: 'educator',
            }
        })

        res.json({success: true,message: "Bây giờ bạn có thể đăng khoá học" })

    } catch (error) {
        res.json({success: false, message: error.message})
        
    }
}