/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/features/hook";
import { verifyToken } from "../utils/verifyToken";


const Login = () => {
    const dispatch = useAppDispatch();
    const {register,handleSubmit}= useForm({
        defaultValues:{
            userId:'A-0002',
            password:'admin123'
        }
    })

    const [login,{error}]= useLoginMutation()
    
   
    
    

    const onSubmit = async(data:any)=>{

        const userInfo={
            id:data.userId,
            password:data.password
        };
        login(userInfo)
        const res= await login(userInfo).unwrap();
       const user = verifyToken(res.data.accessToken)
       console.log(user);
       
        
        dispatch(setUser({user:user,token:res.data.accessToken}))
     
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <div>
            <label htmlFor="id">ID:</label>
            <input type="text" placeholder="please id" {...register('userId')}/>
           </div>
           <div>
            <label htmlFor="password">Password:</label>
            <input type="text" placeholder="please id" {...register('password')} />
           </div>
           <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;