const express = require('require');
const responseTime = require('response-time');
const redis = require('redis');
const app = express();

const port = 3000

app.use(responseTime());

const redisClient = redis.createClient({
    url:'redis://localhost:6379'
})

redisClient.on('error', err => console.log("Redis client error"))

app.get('/with-redis', async (req,res) => {
    try {
        const getResultRedis = await redisClient.get('curso')
        if (getResultRedis){
            return res.status(200).json({
                data:JSON.parse(getResultRedis)
            })
        }

        const response = await axios.get('https://link_api')
    } catch (error) {
        
    }
})
app.get('/', (req,res) => {
    res.send('Hola Mundo!')
})

app.listen(port, () => {
    console.log(`Server escuhando en http://localhost:${port}`)
})