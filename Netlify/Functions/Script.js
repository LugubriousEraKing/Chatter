// This is the content of script.js in /netlify/functions/
exports.handler = async (event, context) => {
  const userMessage = event.queryStringParameters.message;
  
  // Replace this logic with your chatbot's functionality
  const chatterResponse = `Chatter received: ${userMessage}`;

  return {
    statusCode: 200,
    body: JSON.stringify({ response: chatterResponse }),
  };
};
