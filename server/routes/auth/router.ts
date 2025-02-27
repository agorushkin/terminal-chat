import { ServerRouter } from 'x/http';

import { generateChallenge } from '/server/routes/auth/challenge.ts';
import { generateToken } from '/server/routes/auth/login.ts';
import { registerUser } from '/server/routes/auth/register.ts';

export const authRouter = new ServerRouter('');

authRouter.post('/login', generateToken);
authRouter.get('/challenge', generateChallenge);
authRouter.post('/register', registerUser);
