const { OAuth2Client } = require('google-auth-library')
const nodemailer = require('nodemailer')

const readerService = require('../reader/readerService')
const librarianService = require('../librarian/librarianService')

const myOAuth2Client = new OAuth2Client(
  process.env.GOOGLE_MAILER_CLIENT_ID,
  process.env.GOOGLE_MAILER_CLIENT_SECRET
)
// Set Refresh Token vào OAuth2Client Credentials
myOAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN
})

exports.sendEmailReader = async (req, res) => {
  try {
    const { email } = req.body
    if (!email) throw new Error('Please provide email')
    const reader = await readerService.getReaderByEmail(email)
    const myAccessTokenObject = await myOAuth2Client.getAccessToken()
    const myAccessToken = myAccessTokenObject?.token
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.ADMIN_EMAIL_ADDRESS,
        clientId: process.env.GOOGLE_MAILER_CLIENT_ID,
        clientSecret: process.env.GOOGLE_MAILER_CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
        accessToken: myAccessToken
      }
    })
    const link = `${req.protocol}://${req.get('host')}/auth/verify-reader?token=${reader.token}&email=${email}`;
    const mailOptions = {
      to: email,
      subject: "[Library Management] Xác thưc tài khoản bạn đọc", // Tiêu đề email
      html: `<p>Chào ,</p>
      <p>Ai đó đã gửi yêu cầu xác thực tài khoản đến webiste của Library Management</p>
      <p>Tài khoản xác thực: ${email}</p>
      <p>Nếu đây là một thao tác nhầm lẫn, bạn chỉ cần bỏ qua email này. Sẽ không có vấn đề gì xảy ra với tài khoản của bạn.</p>
      <p>Nếu đây là thao tác đúng lẽ, bạn cần bấm vào đường link bên dưới để đổi xác thực tài khoản:</p>
      <a href="${link}" >Xác thực tài khoản</a>
      <p>Nếu bạn không biết về thao tác này, có lẽ ai đó đã cố gắng truy cập vào tài khoản của bạn. Vui lòng không gửi đường link này cho bất cứ ai</p>`
    }
    await transport.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully.' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error.message })
  }
}

exports.sendEmailLibrarian = async (req, res) => {
  try {
    const { email } = req.body
    if (!email) throw new Error('Please provide email')
    const librarian = await librarianService.getLibrarianByEmail(email)
    const myAccessTokenObject = await myOAuth2Client.getAccessToken()
    const myAccessToken = myAccessTokenObject?.token
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.ADMIN_EMAIL_ADDRESS,
        clientId: process.env.GOOGLE_MAILER_CLIENT_ID,
        clientSecret: process.env.GOOGLE_MAILER_CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
        accessToken: myAccessToken
      }
    })
    const link = `${req.protocol}://${req.get('host')}/auth/verify-librarian?token=${librarian.token}&email=${email}`;
    const mailOptions = {
      to: email,
      subject: "[Library Management] Xác thưc tài khoản người quản lí thư viện", // Tiêu đề email
      html: `<p>Chào ,</p>
      <p>Ai đó đã gửi yêu cầu xác thực tài khoản đến webiste của Library Management</p>
      <p>Tài khoản xác thực: ${email}</p>
      <p>Nếu đây là một thao tác nhầm lẫn, bạn chỉ cần bỏ qua email này. Sẽ không có vấn đề gì xảy ra với tài khoản của bạn.</p>
      <p>Nếu đây là thao tác đúng lẽ, bạn cần bấm vào đường link bên dưới để đổi xác thực tài khoản:</p>
      <a href="${link}" >Xác thực tài khoản</a>
      <p>Nếu bạn không biết về thao tác này, có lẽ ai đó đã cố gắng truy cập vào tài khoản của bạn. Vui lòng không gửi đường link này cho bất cứ ai</p>`
    }
    await transport.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully.' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error.message })
  }
}
