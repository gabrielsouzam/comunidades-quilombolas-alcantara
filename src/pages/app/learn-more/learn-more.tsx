import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import BallsImage from "./../../../assets/learn-more-balls.svg"
import { z } from "zod"

const messageFormSchema = z.object({
  name: z.string().min(1, { message: 'Por favor, insira seu nome.' }),
  email: z
    .string()
    .min(1, { message: 'O e-mail é obrigatório.' })
    .email({ message: 'Insira um e-mail válido.' }),
  theme: z.string().min(1, { message: 'Informe o tema do contato.' }),
  content: z.string().min(1, { message: 'Escreva sua mensagem.' }),
})

type messageFormData = z.infer<typeof messageFormSchema>

export function LearnMore() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<messageFormData>({
    resolver: zodResolver(messageFormSchema),
  })

  function handleSendMessage(data: messageFormData) {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const userId = import.meta.env.VITE_EMAILJS_USER_ID

    const now = new Date()
    const time = now.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    const templateParams = {
      name: data.name,
      email: data.email,
      theme: data.theme,
      content: data.content,
      time,
    }

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response)
        toast.success('Mensagem enviada com sucesso!')
        reset()
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error)
        toast.error('Ocorreu um erro ao enviar. Tente novamente.')
      })
  }

  return (
    <div className="h-full bg-base-orage pl-32 py-30 text-base-white flex gap-24">
      <div className="flex-1">
        <h2 className="text-4xl mb-4">Gostaria de saber mais sobre nossa pesquisa?</h2>
        <h3 className="text-2xl mb-6 font-light">Entre em contatro conosco</h3>
        <form
          className="flex flex-col items-center space-y-11"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <div className="w-full">
            <input
              {...register('name')}
              placeholder="Nome"
              className={`w-full rounded-lg bg-base-white px-4 py-2 text-2xl text-brown-800 shadow-md placeholder:text-2xl placeholder:font-light placeholder:text-brown-800 ${errors.name ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="w-full">
            <input
              {...register('email')}
              placeholder="E-mail"
              className={`w-full rounded-lg bg-base-white px-4 py-2 text-2xl text-brown-800 shadow-md placeholder:text-2xl placeholder:font-light placeholder:text-brown-800 ${errors.email ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full">
            <input
              {...register('theme')}
              placeholder="Tema de contato"
              className={`w-full rounded-lg bg-base-white px-4 py-2 text-2xl text-brown-800 shadow-md placeholder:text-2xl placeholder:font-light placeholder:text-brown-800 ${errors.theme ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.theme && (
              <span className="text-sm text-red-500">
                {errors.theme.message}
              </span>
            )}
          </div>

          <div className="w-full">
            <textarea
              {...register('content')}
              placeholder="Mensagem"
              className={`h-80 w-full rounded-lg bg-base-white px-4 py-2 text-2xl text-brown-800 shadow-md placeholder:text-2xl placeholder:font-light placeholder:text-brown-800 ${errors.content ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.content && (
              <span className="text-sm text-red-500">
                {errors.content.message}
              </span>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className={`rounded-full px-28 py-5 italic text-center text-3xl font-semibold shadow-2xl bg-terracota-red
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'text-base-orage cursor-pointer'}`}
          >
            enviar
          </button>


        </form>
      </div>

      <div className=" my-auto">
        <img src={BallsImage} alt="cone de bolas" />
      </div>


    </div>
  )
}