import "dotenv/config"
import { Server } from "./presentation/server";
import { envs } from "./config/plugin/envs.plugin";


const main =()=>{
 Server.start();
envs.PORT
}

(()=>{
  main()
})()
