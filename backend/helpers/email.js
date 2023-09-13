import nodemailer from "nodemailer"

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const info = await transport.sendMail({
    from: '"AdminTask"- Administrador de Proyectos"<cuentas@gmail.com>',
    to: email,
    subject: "AdminTask- Comprueba tu email",
    text: "Comprueba tu cuenta en AdminTask",
    html: `<p>Hola ${nombre} comprueba tu cuenta en AdminTask</p>
  <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</p>
  
  <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
  
  <p>Si no creaste esta cuenta, puedes ignorar el mensaje</p>
  
  `,
  })
}

export const olvidoPassword = async (datos) => {
  const { email, nombre, token } = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const info = await transport.sendMail({
    from: '"AdminTask"- Administrador de Proyectos"<cuentas@gmail.com>',
    to: email,
    subject: "AdminTask-Reestablece tu password",
    text: "Reestablece tu password",
    html: `<p>Hola ${nombre} solicistaste reestablecer tu contraseña </p>
  <p>Sigue el siguiente enlace para restablecer tu password </p>
  
  <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer password</a>
  
  <p>Si tu no te olvidaste tu password, puedes ignorar el mensaje</p>
  
  `,
  })
}
