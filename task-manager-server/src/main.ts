import { ValidationPipe } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import * as cookieParser from "cookie-parser"

import { AppModule } from "./app.module"

const main = async () => {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)

  const secret = config.getOrThrow<string>("COOKIE_SECRET")
  const origin = config.getOrThrow<string>("ALLOWED_ORIGIN")
  const port = config.getOrThrow<number>("APPLICATION_PORT")

  app.use(cookieParser(secret))

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  app.enableCors({
    credentials: true,
    exposedHeaders: ["set-cookie"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    origin,
  })

  await app.listen(port)
}

main()
