import cors, { CorsOptions } from "cors";

const domains: string[] = ['http://localhost:3000', 'http://localhost:4200'];

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if(!origin) return callback(null, true);
        if (domains.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(`This site ${origin} does not have an access. Only specified domains are allowed to access it.`));
        }
    },
    optionsSuccessStatus: 200,
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders:
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Length",
    credentials: true,
};

export default function corsConfig(){
    return cors(corsOptions);
};