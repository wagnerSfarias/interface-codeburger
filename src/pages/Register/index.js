import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import RegisterImg from '../../assets/register-image.png'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'
import {
  IconLoading,
  Container,
  Logo,
  ContainerItens,
  Label,
  Input,
  SignInlink
} from '../Login/styles'

export function Register() {
  const history = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digítos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais;')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    toast.info('Verificando dados.', {
      icon: <IconLoading />,
      autoClose: 1500
    })

    try {
      const response = await api.post(
        '/users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (response.status === 201 || response.status === 200) {
        toast.success('Usuário criado.')
        history.goBack()
      } else if (response.status === 409) {
        toast.error('Email já cadastrado! Faça login para continuar.')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente. ')
    }
  }

  return (
    <Container>
      <Logo src={RegisterImg} alt="register-image" />
      <ContainerItens>
        <h1>Cadastra-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Name</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit">Cadastrar</Button>
          <SignInlink>
            Já possui conta ? <Link to="/login">Entrar</Link>
          </SignInlink>
        </form>
      </ContainerItens>
    </Container>
  )
}
