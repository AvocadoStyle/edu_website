import { isUserAllowed } from './user_authorization.js'

export default function userDeco(fn, privilege_type) {
    return function(req, res) {
      const auth = isUserAllowed(req.headers.authorization, privilege_type);
      if (!auth)
        return res.status(401).json({'message': new Error(`only ${privilege_type} allowed privilege`).message})
      fn.apply(this, [req, res]);
    }
  }

