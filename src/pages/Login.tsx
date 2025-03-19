/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/features/hook";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin123",
    },
  });

  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data: any) => {
   const tostId= toast.loading("Logging in")
    try{

        const userInfo = {
            id: data.userId,
            password: data.password,
        };
        login(userInfo);
        const res = await login(userInfo).unwrap();
        const user = verifyToken(res.data.accessToken) as TUser;
        console.log(user);
        
        dispatch(setUser({ user: user, token: res.data.accessToken }));
        toast.success("Logged in" ,{id:tostId,duration:2000})
        navigate(`/${user.role}/dashboard`)
    }catch(err){
        toast.error("something went wrong",{id:tostId,duration:2000})
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" placeholder="please id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" placeholder="please id" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
