import axios from 'axios';
import s from './Autorization.module.css'
import { toast } from 'react-toastify';
import { InputTextfield } from './UI/InputTextfield';
import { FormProvider, useForm } from 'react-hook-form';
import { object, string } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, Container, Typography } from '@mui/material';
import { GetContext } from '../context/Context';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '../header/Header';

export const Login = ({url, header}) => {
  const LOGIN_URL = "http://localhost:5000/login";
  const navigate = useNavigate();
  const { user, setUser } = GetContext();
  let page = `/StidyPage`;
  let USER_URL = ``;
  if (url == null) {
    url = `users`;
    USER_URL = `http://localhost:5000/${url}/register`;
  } else {
    url = `teacher`
    page = `/teacher`
    USER_URL = `http://localhost:5000/${url}/register`;
  }

  const registrSchema = object({
    email: string()
      .nonempty("Поле обязательно к заполнения")
      .email("Электронная почта недействительна"),
    password: string()
      .nonempty("Поле обязательно к заполнения")
      .min(4, "Пароль должен содержать не более 4 символов")
      .max(32, "Пароль должен содержать не менее 32 символов"),
  });

  const methods = useForm({
    resolver: zodResolver(registrSchema),
  });

  const { handleSubmit, reset } = methods;

  const onRegisterSubmit = async (loginUser) => {
    try {
      const { data } = await axios.post(LOGIN_URL, loginUser);
      setUser({
        token: data.accessToken,
        ...data.user,
      });

      localStorage.setItem(
        "user",
        JSON.stringify({ token: data.accessToken, ...data.user })
      );
      toast.success("Вы вошли в свой аккаунт!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
      navigate(page);
    } catch (err) {
      toast.error(`${err.response.data}, произошла ошибка! `, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
     {   !header ?
<Header/> : null }
    <section className={s.auth}>
      <div className="container">
        <div className={s.auth_content}>
          <Typography variant="h5" className={s.auth_title}>
            Войти
          </Typography>
          <FormProvider {...methods}>
            <form
              className={s.auth_form}
              onSubmit={handleSubmit(onRegisterSubmit)}
            >
              <div className={s.form_img}>
                <Avatar
                  sx={{ width: 70, height: 70 }}
                  alt="Remy Sharp"
                  src=""/* {signUpImg} */
                ></Avatar>
              </div>

              <InputTextfield
                name="email"
                label="Email"
                size="small"
                margin="dense"
                variant="outlined"
              />

              <InputTextfield
                name="password"
                label="Пароль"
                size="small"
                margin="dense"
                variant="outlined"
                type="password"
                sx={{ marginBottom: 2 }}
              />

              <Button
                variant="contained"
                type="submit"
                sx={{ marginBottom: 1, backgroundColor: `var(--btn_color)` }}
              >
                Войти
              </Button>
    {header == null ? 

          (    <Typography variant="caption" display="block">
                Еще нет аккаунта?
                <Link to="/registr" className={s.form_link}>
                  Зарегестрируйтесь
                </Link>
              </Typography>)
   : null }
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
    </>
  );
};
