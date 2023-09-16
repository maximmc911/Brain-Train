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
import { useState } from 'react';

export const Regsiter = ({url, header}) => {
/*   const [Conventer, setConventer] = useState(); */


  const {user, setUser} = GetContext();
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
  
const navigate = useNavigate();

const registerSchema = object({
  name: string()
    .nonempty("Имя обязательно к заполнению")
    .min(2, "Имя должно состоять не менее 3 символов!")
    .max(32, "Имя должно состоять не больше 32 символов!"),
  email: string()
    .nonempty("E-mail обязателен к заполнению")
    .email("введите корректный e-mail"),
  login: string()
    .nonempty("Придумайте логин")
    .min(2, "Логин должен состоять не менее 3 символов!")
    .max(32, "Логин должен состоять не больше 32 символов!"),
  password: string()
    .nonempty("Пароль обязателен к заполнению")
    .min(2, "Пароль должен состоять не менее 3 символов!")
    .max(32, "Пароль должен состоять не больше 32 символов!"),
  passwordConfirm: string().nonempty("Поле обязательно к заполнению"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Пароли не совпадают",
});

const methods = useForm({
  resolver: zodResolver(registerSchema),

});

const { handleSubmit, reset } = methods;



  /* ! Удалить после установки сервака*/

  /* ! Необходимо после установки сервака*/
const onRegisterSubmit = async (newUser) => {
  try {
    const {passwordConfirm, ...rest} = newUser;
    const {data} = await axios.post(USER_URL, rest);
    console.log(data.user);

    setUser({
      token: data.accessToken,
      ...data.user,
    })
    localStorage.setItem(`user`, JSON.stringify({
      token: data.accessToken,
      ...data.user,
    }))

    toast.success(`${data.user.name}, успешно зарегались!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
   
    reset(),
    navigate(page);
    
  } catch (err) {
    console.log(err.message);
    toast.success(`${err.message}, произошла ошибка :( Повторите попытку снова` , {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
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
  <div className={s.auth}>
   
    <Container fixed>
      <div className={s.auth_content}>
        <Typography variant="h5" gutterBottom className={s.auth_title}>
          Регистрация
        </Typography>

        <FormProvider {...methods}>
          <form
            className={s.auth_form}
            onSubmit={handleSubmit(onRegisterSubmit)}
          >
            <div className={s.form_img}>
              <Avatar
                alt="profile"
                src={null}
                sx={{ width: 70, height: 70 }}
              />
            </div>

            <InputTextfield
              name="name"
              label="Имя"
              size="small"
              margin="dense"
            />
            <InputTextfield
              name="email"
              label="Email"
              size="small"
              margin="dense"
            />
             <InputTextfield
              name="login"
              label="Логин"
              size="small"
              margin="dense"
            />
            <InputTextfield
              name="password"
              label="Пароль"
              size="small"
              margin="dense"
              type="password"
            />
            <InputTextfield
              name="passwordConfirm"
              label="Пароль"
              size="small"
              margin="dense"
              type="password"
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ marginBottom: 1, backgroundColor: `var(--btn_color)`}}
            >
              
              Зарегистрироваться
            </Button>
{ header == null  ? 
          ( <Typography variant="caption" display="block" gutterBottom>
              Уже зарегестрированы?
              <Link to="/login" className={s.form_link}>
                Войдите
              </Link>
            </Typography>)

: null}
          </form>
        </FormProvider>
      </div>
    </Container>
  </div>
  </>
);
};
