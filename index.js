const axios = require('axios');
const openaiKey = 'sk-iJwf89mfv3HbSkoO80oUcgmnJJOWp933iP5e4VubRBurxceF'; // 替换为你的OpenAI API密钥

async function askOpenAI(question) {
  const response = await axios('https://api.chatanywhere.com.cn/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openaiKey}`
    },
    data: {
      model: "gpt-3.5-turbo", // 根据实际情况选择合适的模型
      "messages": [{ "role": "user", "content": `${question}` }],
      temperature: 0.7,
    },
  });

  const data = response.data;
  return data.choices[0].message.content;
}

const str = `假如你是心理健康方面的专家，现在有几个问题，请你给出一些良好的建议。0. 你偏执吗？（人格偏执程度在线测评）, 这个人的回答是没有回答。1. 你 的姓名, 这个人的回答是gzh。2. 对别人求全责备, 这个人的回答是中等。3. 有一些别人没有的想法和念头, 这个人的回答是中等。4. 责怪别人制造麻烦, 这个人的回答是没有或轻度。请你根据以上问题，对这个人的心理状况做出建议`

// 使用示例
askOpenAI(str).then(answer => console.log(answer))
