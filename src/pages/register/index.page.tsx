import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="Form">
        <label>
          <Text size="sm">Nome de Usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usario" />
        </label>
        <label>
          <Text size="sm">Nome Completo</Text>
          <TextInput placeholder="seu-usario" />
        </label>

        <Button type="submit">
          Próximo Passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
