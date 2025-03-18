/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";


const Login = () => {
    const dispatch = useAppDispatch();
    const {register,handleSubmit}= useForm({
        defaultValues:{
            userId:'A-0002',
            password:'admin123'
        }
    })

    const [login,{data,error}]= useLoginMutation()
    console.log('data =>',data);
    console.log('error',error);
   
    
    

    const onSubmit =async (data)=>{

        const userInfo={
            id:data.userId,
            password:data.password
        };
        const res= await login(userInfo).unwrap();
        dispatch(setUser({user:{},token:res.data.accessToken}))
     
        
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