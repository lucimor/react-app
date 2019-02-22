export const FAKE_USER = {
  firstName: 'Dave',
  lastName: 'Ceddia',
  username: 'dave',
  avatar:
    'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b?s=32'
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: 'NSA - Working',
    body: 'Introduction - NSA : warning to talent.. Enjoy j apprend le reac trop drôle '
  },
  {
    id: 1,
    subject: 'msg',
    body: 'It MSG'
  },
  {
    id: 2,
    subject: 'Git request ~ Mail2Linux',
    body:
      '[FR] ~'
  },
  {
    id: 3,
    subject: 'TEST ID3',
    body:
      '[FR] : /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////'
  },
  {
    id: 4,
    subject: 'GNU/Linux',
    body:
      'STAY CONNECTED'
  }
];

// Generate a preview
FAKE_EMAILS.forEach(
  email => (email.preview = email.body.substr(0, 46))
);

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'dave' && password === 'secret') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'Invalid username or password' });
      }
    }, 300);
  });
}

export function fetchEmails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FAKE_EMAILS);
    }, 300);
  });
}
