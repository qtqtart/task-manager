import { ValidationPipe } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import { dateToMs, DateToMsValue } from "@shared"
import ConnectRedis from "connect-redis"
import * as cookieParser from "cookie-parser"
import * as session from "express-session"
import IORedis from "ioredis"

import { AppModule } from "./app.module"

const main = async () => {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)

  const origin = config.getOrThrow<string>("ALLOWED_ORIGIN")
  const port = config.getOrThrow<number>("APPLICATION_PORT")
  const cookieSecret = config.getOrThrow<string>("COOKIE_SECRET")
  const cookieDomain = config.getOrThrow<string>("COOKIE_DOMAIN")
  const sessionSecret = config.getOrThrow<string>("SESSION_SECRET")
  const sessionName = config.getOrThrow<string>("SESSION_NAME")
  const sessionMaxAge = config.getOrThrow<string>("SESSION_MAX_AGE")
  const sessionHttpOnly = config.getOrThrow<boolean>("SESSION_HTTP_ONLY")
  const sessionSecure = config.getOrThrow<boolean>("SESSION_SECURE")
  const sessionSameSite = config.getOrThrow<string>("SESSION_SAME_SITE")
  const sessionFolder = config.getOrThrow<string>("SESSION_FOLDER")
  const redisUrl = config.getOrThrow<string>("REDIS_URL")

  const redis = new IORedis(redisUrl)
  const redisStore = new ConnectRedis({
    client: redis,
    prefix: sessionFolder,
  })

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

  app.use(cookieParser(cookieSecret))

  app.use(
    session({
      cookie: {
        domain: cookieDomain,
        httpOnly: sessionHttpOnly,
        maxAge: dateToMs(sessionMaxAge as DateToMsValue),
        sameSite: sessionSameSite as "lax" | "none" | "strict",
        secure: sessionSecure,
      },
      name: sessionName,
      resave: true,
      saveUninitialized: false,
      secret: sessionSecret,
      store: redisStore,
    }),
  )

  await app.listen(port)
}

main()
