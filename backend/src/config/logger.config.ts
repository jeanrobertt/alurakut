import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
	level: "info",
	format: format.combine(
		format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		format.colorize({ level: true }),
		format.json(),
		format.printf(
			(info) =>
				` [${info.timestamp}] [${info.level}]: ${info.message} ${
					info.stack ? `\n${info.stack}` : ""
				}`
		)
	),
	defaultMeta: { service: "user-service" },
	transports: [
		new transports.File({
			filename: "error.log",
			level: "error",
			options: {},
		}),
		new transports.File({ filename: "server.log" }),
		new transports.Console(),
	],
});
