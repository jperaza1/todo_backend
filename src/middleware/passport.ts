import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
};

export default new Strategy(opts, (payload, done) => {
  return done(null, "Verificado");
});
