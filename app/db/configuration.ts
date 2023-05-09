export const configuration = {
    redis: {
        host : process.env.REDIS_HOST!,
        password: process.env.REDIS_PASSWORD!,
        port: parseInt(process.env.REDIS_PORT!),
        db: process.env.REDIS_DB!
    }

}