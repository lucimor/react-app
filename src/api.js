export const FAKE_USER = {
  firstName: 'Dave',
  lastName: 'Ceddia',
  username: 'dave',
  avatar:
    'https://www.gravatar.com/avatar/14dbd2583485dbd44b?s=32'
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: 'NSA - Working',
    body: 'Introduction - NSA : warning to talent.. Enjoy j apprend le react trop drôle '
  },
  {
    id: 1,
    subject: 'Loged by msg',
    body: 'OPT://STP:22'
  },
  {
    id: 2,
    subject: 'Git Request ~ Mail2Linux',
    body:
      '[FR] ~'
  },
  {
    id: 3,
    subject: 'TEST ID3',
    body:
      '[FR] : ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////'
  },
  {
    id: 4,
    subject: 'GNU/Linux',
    body:
      'STAY CONNECTED'
  },
  {
    id: 5,
    subject: 'Enjoy from React',
    body:
      'react > ALL'
  },
  {
    id: 5,
    subject: 'Syst Admin',
    body:
      'granted access'
  },
  {
    id: 6,
    subject: 'Permission Ex',
    body:
      'groupe add * "Lucien"'
  },
  {
    id: 7,
    subject: '====',
    body:
      'g-admin /var/www/'
  }
];

// Generate a preview
FAKE_EMAILS.forEach(
  email => (email.preview = email.body.substr(0, 46))
);

export function login(username, password) {
  console.log("tested by API " + login)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'username' && password === 'password') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'ERREURS SYSTEME' });
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
