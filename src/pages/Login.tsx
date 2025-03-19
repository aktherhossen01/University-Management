/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/features/hook";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHinput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin123",
  //   },
  // });

  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: any) => {
    console.log(data);

    const tostId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      login(userInfo);
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: tostId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("something went wrong", { id: tostId, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID:" />

        <PHInput type="text" name="password" label="Password" />

        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
