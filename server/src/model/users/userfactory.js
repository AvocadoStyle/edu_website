import Admin from "./admin.js";
import Regular from "./regular.js";
import User from "./user.js";

export default class UserFactory {
    static async user(name, email, password, type) {
      // const className = type.charAt(0).toUpperCase() + type.slice(1);
      const { default: UserClass } = (await import(`./${type}.js`));
      return new UserClass(name, email, password, type);
    }
  }