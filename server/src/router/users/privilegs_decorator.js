// export default function adminUserDeco(fn){
//     return function(req, res){
//         let privilege = 'admin'
//         const auth = isUserAllowed(req.headers.authorization, privilege);
//         if(!auth)
//             throw new Error(`${privilege} not allowed`)
//         fn.apply(this, req, res)
//     }
// }

// export default function regularUserDeco(fn){
//     return function(req, res){
//         let privilege = 'regular'
//         const auth = isUserAllowed(req.headers.authorization, privilege);
//         if(!auth)
//             throw new Error(`${privilege} not allowed`)
//         fn.apply(this, req, res)
//     }
// }
export default function userDeco(fn, privilege_type) {
    return function(req, res) {
      const auth = isUserAllowed(req.headers.authorization, privilege_type);
      if (!auth)
        throw new Error(`${privilege_type} not allowed`)
      fn.apply(this, [req, res]);
    }
  }