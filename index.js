const dotenv = require('dotenv');
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
(async () => {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Can you write a simple python code?",
    });
    console.log(completion.data.choices[0].text);
})();