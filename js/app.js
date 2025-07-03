let chatHistory = [];

    async function AIChatbot() {
      const chatBox = document.getElementById("chat-box");
      const userInputElement = document.getElementById("user-type-input");
      const userMessage = userInputElement.value.trim();

      if (!userMessage) {
        // Add shake animation to input
        userInputElement.style.animation = 'shake 0.5s';
        setTimeout(() => userInputElement.style.animation = '', 500);
        return;
      }

      // Clear empty state
      const emptyState = chatBox.querySelector('.empty-state');
      if (emptyState) {
        emptyState.remove();
      }

      // Add user message
      addMessage(userMessage, 'user');
      userInputElement.value = '';

      // Add typing indicator
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'typing-indicator';
      typingIndicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
      chatBox.appendChild(typingIndicator);
      chatBox.scrollTop = chatBox.scrollHeight;

      try {
        const response = await fetch(
          'https://openrouter.ai/api/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              Authorization: 'Bearer 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', // Replace with your API key
              'HTTP-Referer': 'https://www.sitename.com',
              'X-Title': 'SiteName',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'deepseek/deepseek-r1:free',
              messages: [{ role: 'user', content: userMessage }],
            }),
          }
        );

        // Remove typing indicator
        typingIndicator.remove();

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const botResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process your request.";
        
        // Add bot response with slight delay for better UX
        setTimeout(() => {
          addMessage(botResponse, 'bot');
        }, 200);

      } catch (error) {
        // Remove typing indicator
        typingIndicator.remove();
        
        // Add error message
        setTimeout(() => {
          addMessage(`❌ Error: ${error.message}`, 'bot');
        }, 200);
      }
    }

    function addMessage(message, type) {
      const chatBox = document.getElementById("chat-box");
      const messageElement = document.createElement('div');
      messageElement.className = `message ${type}-message`;
      messageElement.textContent = message;
      
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
      
      // Store in chat history
      chatHistory.push({ message, type, timestamp: new Date() });
    }

    // Add Enter key support
    document.getElementById('user-type-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        AIChatbot();
      }
    });

    // Add shake animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
      }
    `;
    document.head.appendChild(style);