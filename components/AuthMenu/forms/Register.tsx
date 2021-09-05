import { FC } from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormField } from '../../FormField';
import { RegisterFormSchema } from '../../../utils/validations';

interface RegisterFormProps {
  onRegister: () => void;
  onEmail: () => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onRegister, onEmail }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="fullname" label="Имя и фамилия" />
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              onClick={onRegister}
              color="primary"
              variant="contained">
              Зарегестрироваться
            </Button>
            <Button onClick={onEmail} color="primary" variant="text">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
