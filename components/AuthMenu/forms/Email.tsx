import { FC } from 'react';
import { Button } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';

interface EmailFormProps {
  onRegister: () => void;
}

export const EmailForm: FC<EmailFormProps> = ({ onRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              color="primary"
              variant="contained">
              Войти
            </Button>
            <Button onClick={onRegister} color="primary" variant="text">
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
