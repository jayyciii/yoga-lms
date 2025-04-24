import express from 'express'
import { addCourse, educatorDashboardData, getEducatorCourses, getEnrolledStudentsData, updateRoleToEducator } from '../controllers/educatorController.js';
import upload from '../configs/multer.js';
import { protectEducator } from '../middleware/authMiddleware.js';


const educatorRouter = express.Router()

//them quyen
educatorRouter.get('/update-role',updateRoleToEducator)

// POST /api/educator/add-course
educatorRouter.post(
    '/add-course',
    protectEducator,           // 1) Xác thực Educator
    upload.single('image'),     // 2) Multer parse field 'image'
    addCourse                   // 3) Controller xử lý
  );

  educatorRouter.get('/courses', protectEducator, getEducatorCourses)
  educatorRouter.get('/dashboard', protectEducator, educatorDashboardData)
  educatorRouter.get('/enrolled-students', protectEducator, getEnrolledStudentsData)


export default educatorRouter;