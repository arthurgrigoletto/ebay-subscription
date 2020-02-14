export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT || '1025',
  default: {
    from: 'Equipe RankMyApp <noreply@rankmyapp.com>',
  },
};
