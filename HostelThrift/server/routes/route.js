import express from 'express';
import { loginUser, singupUser} from '../controller/user-controller.js';
import { uploadImage, getImage} from '../controller/image-controller.js';
import { createPost} from '../controller/post-controller.js';
import {authenticateToken} from '../controller/jwt-controller.js';

import upload from '../utils/upload.js';
//import CreatePost from '../../client/src/components/create/CreatePost.jsx';


const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/file/upload', upload.single('file'), uploadImage);//here route.post takes 3 argument, 1. is route, 2. is middleware, 3. API function
//to convert image from binary and we need to uplaod it to mongodb, so the type of image, whether we can upload it or not, and where we need to uplaod we need middleware
//middleware work come in picture when we want to do something before the implementation of actual api, here we are uploading image on mongodb before api imp
router.get('/file/:filename', getImage);
//npm i gridfs-stream-Easily stream files to and from mondoDb gridFs 

router.post('/create', authenticateToken, createPost);

export default router;