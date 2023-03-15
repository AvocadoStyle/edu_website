export default function userDeco(fn, privilege_type) {
    return function(req, res) {
      // const auth = isUserAllowed(req.headers.authorization, privilege_type);
      // if (!auth)
        // throw new Error(`${privilege_type} not allowed`)
      // fn.apply(this, [req, res]);
    }
  }

